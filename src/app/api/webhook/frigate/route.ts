// ============================================================
//  API — /api/webhook/frigate
//  POST = receive events from Frigate NVR or ESP32 nodes
//
//  This is an unauthenticated endpoint secured by a shared
//  secret (WEBHOOK_SECRET). Your Frigate/MQTT bridge posts here.
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(req: NextRequest) {
  // Verify webhook secret
  const secret = req.headers.get("x-webhook-secret");
  const expectedSecret = process.env.WEBHOOK_SECRET;

  if (!expectedSecret || secret !== expectedSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const {
    userId,
    type,        // person, motion, audio, glass_break
    severity,    // high, medium, low, info
    source,      // camera or sensor name
    zone,
    description,
    snapshotUrl,
  } = body;

  if (!userId || !type || !source) {
    return NextResponse.json(
      { error: "userId, type, and source are required" },
      { status: 400 }
    );
  }

  const now = new Date().toISOString();

  // Log the event
  const eventRef = await adminDb
    .collection("users")
    .doc(userId)
    .collection("events")
    .add({
      type,
      severity: severity || "medium",
      source,
      zone: zone || "Unknown",
      description: description || `${type} detected by ${source}`,
      snapshotUrl: snapshotUrl || null,
      acknowledged: false,
      timestamp: now,
    });

  // If high severity, check if there's an automation rule to fire
  if (severity === "high") {
    const rules = await adminDb
      .collection("users")
      .doc(userId)
      .collection("automation")
      .where("enabled", "==", true)
      .get();

    const matchingRules = rules.docs.filter((doc) => {
      const data = doc.data();
      return data.trigger?.type === type;
    });

    // Mark matching rules as triggered
    for (const rule of matchingRules) {
      await rule.ref.update({ lastTriggered: now });
    }
  }

  return NextResponse.json(
    { eventId: eventRef.id, message: "Event received" },
    { status: 201 }
  );
}

// ============================================================
//  API — /api/events
//  GET  = list detection events (with optional filters)
//  POST = log a new event (from ESP32/Frigate webhook)
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { getUid } from "@/lib/proxy-auth";
import { adminDb } from "@/lib/firebase-admin";

export async function GET(req: NextRequest) {
  const uid = await getUid(req);
  if (!uid) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const limitParam = searchParams.get("limit");
  const typeFilter = searchParams.get("type"); // person, motion, audio, system
  const severityFilter = searchParams.get("severity"); // high, medium, low, info

  let query = adminDb
    .collection("users")
    .doc(uid)
    .collection("events")
    .orderBy("timestamp", "desc")
    .limit(limitParam ? parseInt(limitParam, 10) : 50);

  if (typeFilter) {
    query = query.where("type", "==", typeFilter);
  }
  if (severityFilter) {
    query = query.where("severity", "==", severityFilter);
  }

  const snapshot = await query.get();
  const events = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return NextResponse.json({ events });
}

export async function POST(req: NextRequest) {
  const uid = await getUid(req);
  if (!uid) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { type, severity, source, zone, description, snapshotUrl } = body;

  if (!type || !source) {
    return NextResponse.json(
      { error: "Event type and source are required" },
      { status: 400 }
    );
  }

  const docRef = await adminDb
    .collection("users")
    .doc(uid)
    .collection("events")
    .add({
      type, // person, motion, audio, glass_break, alarm, system
      severity: severity || "info", // high, medium, low, info
      source, // camera name or sensor name
      zone: zone || "Unknown",
      description: description || "",
      snapshotUrl: snapshotUrl || null,
      acknowledged: false,
      timestamp: new Date().toISOString(),
    });

  return NextResponse.json({ id: docRef.id, message: "Event logged" }, { status: 201 });
}

// ============================================================
//  API — /api/system/alarm
//  POST = trigger or clear alarm
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth-middleware";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(req: NextRequest) {
  const auth = await verifyAuth(req);
  if ("error" in auth) return auth.error;

  const body = await req.json();
  const { action } = body; // "trigger" | "clear"

  if (!action || !["trigger", "clear"].includes(action)) {
    return NextResponse.json(
      { error: 'action must be "trigger" or "clear"' },
      { status: 400 }
    );
  }

  const now = new Date().toISOString();

  await adminDb
    .collection("users")
    .doc(auth.user.uid)
    .collection("settings")
    .doc("system")
    .set(
      {
        alarmActive: action === "trigger",
        lastAlarmAction: action,
        lastAlarmTimestamp: now,
        lastUpdated: now,
      },
      { merge: true }
    );

  // Also log as an event
  await adminDb
    .collection("users")
    .doc(auth.user.uid)
    .collection("events")
    .add({
      type: "alarm",
      severity: action === "trigger" ? "high" : "info",
      source: "Dashboard",
      zone: "System",
      description:
        action === "trigger"
          ? "Alarm manually triggered from dashboard"
          : "Alarm cleared from dashboard",
      snapshotUrl: null,
      acknowledged: false,
      timestamp: now,
    });

  return NextResponse.json({
    message: action === "trigger" ? "Alarm triggered" : "Alarm cleared",
    alarmActive: action === "trigger",
  });
}

// ============================================================
//  API — /api/system
//  GET   = system status overview
//  PATCH = update system settings (MQTT, Frigate, alarm config)
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { getUid } from "@/lib/proxy-auth";
import { adminDb } from "@/lib/firebase-admin";

export async function GET(req: NextRequest) {
  const uid = await getUid(req);
  if (!uid) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const doc = await adminDb
    .collection("users")
    .doc(uid)
    .collection("settings")
    .doc("system")
    .get();

  if (!doc.exists) {
    // Return defaults for a new account
    return NextResponse.json({
      mqttBrokerIp: "",
      mqttPort: 1883,
      frigateUrl: "",
      alarmDuration: 15,
      systemArmed: false,
      alarmActive: false,
      lastUpdated: null,
    });
  }

  return NextResponse.json(doc.data());
}

export async function PATCH(req: NextRequest) {
  const uid = await getUid(req);
  if (!uid) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  body.lastUpdated = new Date().toISOString();

  await adminDb
    .collection("users")
    .doc(uid)
    .collection("settings")
    .doc("system")
    .set(body, { merge: true });

  return NextResponse.json({ message: "System settings updated" });
}

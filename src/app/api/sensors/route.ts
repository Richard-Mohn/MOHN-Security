// ============================================================
//  API — /api/sensors
//  GET  = list sensors for authenticated user
//  POST = register a new ESP32 sensor node
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth-middleware";
import { adminDb } from "@/lib/firebase-admin";

export async function GET(req: NextRequest) {
  const auth = await verifyAuth(req);
  if ("error" in auth) return auth.error;

  const snapshot = await adminDb
    .collection("users")
    .doc(auth.user.uid)
    .collection("sensors")
    .orderBy("createdAt", "desc")
    .get();

  const sensors = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return NextResponse.json({ sensors });
}

export async function POST(req: NextRequest) {
  const auth = await verifyAuth(req);
  if ("error" in auth) return auth.error;

  const body = await req.json();
  const { name, type, zone, features } = body;

  if (!name || !type) {
    return NextResponse.json(
      { error: "Sensor name and type are required" },
      { status: 400 }
    );
  }

  const docRef = await adminDb
    .collection("users")
    .doc(auth.user.uid)
    .collection("sensors")
    .add({
      name,
      type, // e.g. "ESP32-S3", "ESP32-C3"
      zone: zone || "Unassigned",
      features: features || [], // e.g. ["PIR", "Glass-Break", "Siren"]
      status: "online",
      armed: true,
      battery: 100,
      signalStrength: -45,
      firmwareVersion: "1.0.0",
      lastSeen: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

  return NextResponse.json({ id: docRef.id, message: "Sensor registered" }, { status: 201 });
}

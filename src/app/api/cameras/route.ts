// ============================================================
//  API — /api/cameras
//  GET  = list cameras for authenticated user
//  POST = add a new camera
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
    .collection("cameras")
    .orderBy("createdAt", "desc")
    .get();

  const cameras = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return NextResponse.json({ cameras });
}

export async function POST(req: NextRequest) {
  const auth = await verifyAuth(req);
  if ("error" in auth) return auth.error;

  const body = await req.json();
  const { name, rtspUrl, zone, resolution, fps } = body;

  if (!name) {
    return NextResponse.json({ error: "Camera name is required" }, { status: 400 });
  }

  const docRef = await adminDb
    .collection("users")
    .doc(auth.user.uid)
    .collection("cameras")
    .add({
      name,
      rtspUrl: rtspUrl || "",
      zone: zone || "Unassigned",
      resolution: resolution || "1920x1080",
      fps: fps || 15,
      status: "online",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

  return NextResponse.json({ id: docRef.id, message: "Camera added" }, { status: 201 });
}

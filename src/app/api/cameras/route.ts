// ============================================================
//  API — /api/cameras
//  GET  = list cameras for authenticated user
//  POST = add a new camera
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { getUid } from "@/lib/proxy-auth";
import { adminDb } from "@/lib/firebase-admin";

export async function GET(req: NextRequest) {
  const uid = await getUid(req);
  if (!uid) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const snapshot = await adminDb
    .collection("users")
    .doc(uid)
    .collection("cameras")
    .orderBy("createdAt", "desc")
    .get();

  const cameras = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return NextResponse.json({ cameras });
}

export async function POST(req: NextRequest) {
  const uid = await getUid(req);
  if (!uid) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { name, rtspUrl, zone, resolution, fps } = body;

  if (!name) {
    return NextResponse.json({ error: "Camera name is required" }, { status: 400 });
  }

  const docRef = await adminDb
    .collection("users")
    .doc(uid)
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

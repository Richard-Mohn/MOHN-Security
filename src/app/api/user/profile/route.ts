// ============================================================
//  API — /api/user/profile
//  GET   = get user profile (display name, preferences)
//  PATCH = update profile / notification preferences
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
    .doc("profile")
    .get();

  return NextResponse.json({
    uid,
    ...(doc.exists ? doc.data() : {}),
  });
}

export async function PATCH(req: NextRequest) {
  const uid = await getUid(req);
  if (!uid) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  body.updatedAt = new Date().toISOString();

  await adminDb
    .collection("users")
    .doc(uid)
    .collection("settings")
    .doc("profile")
    .set(body, { merge: true });

  // If displayName is provided, also update Firebase Auth
  if (body.displayName) {
    const { adminAuth } = await import("@/lib/firebase-admin");
    await adminAuth.updateUser(uid, {
      displayName: body.displayName,
    });
  }

  return NextResponse.json({ message: "Profile updated" });
}

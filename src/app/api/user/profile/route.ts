// ============================================================
//  API — /api/user/profile
//  GET   = get user profile (display name, preferences)
//  PATCH = update profile / notification preferences
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth-middleware";
import { adminDb } from "@/lib/firebase-admin";

export async function GET(req: NextRequest) {
  const auth = await verifyAuth(req);
  if ("error" in auth) return auth.error;

  const doc = await adminDb
    .collection("users")
    .doc(auth.user.uid)
    .collection("settings")
    .doc("profile")
    .get();

  return NextResponse.json({
    uid: auth.user.uid,
    email: auth.user.email,
    displayName: auth.user.name || null,
    ...(doc.exists ? doc.data() : {}),
  });
}

export async function PATCH(req: NextRequest) {
  const auth = await verifyAuth(req);
  if ("error" in auth) return auth.error;

  const body = await req.json();
  body.updatedAt = new Date().toISOString();

  await adminDb
    .collection("users")
    .doc(auth.user.uid)
    .collection("settings")
    .doc("profile")
    .set(body, { merge: true });

  // If displayName is provided, also update Firebase Auth
  if (body.displayName) {
    const { adminAuth } = await import("@/lib/firebase-admin");
    await adminAuth.updateUser(auth.user.uid, {
      displayName: body.displayName,
    });
  }

  return NextResponse.json({ message: "Profile updated" });
}

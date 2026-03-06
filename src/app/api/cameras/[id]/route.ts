// ============================================================
//  API — /api/cameras/[id]
//  GET    = single camera detail
//  PATCH  = update camera
//  DELETE = remove camera
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth-middleware";
import { adminDb } from "@/lib/firebase-admin";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(req: NextRequest, ctx: RouteContext) {
  const auth = await verifyAuth(req);
  if ("error" in auth) return auth.error;

  const { id } = await ctx.params;
  const doc = await adminDb
    .collection("users")
    .doc(auth.user.uid)
    .collection("cameras")
    .doc(id)
    .get();

  if (!doc.exists) {
    return NextResponse.json({ error: "Camera not found" }, { status: 404 });
  }

  return NextResponse.json({ id: doc.id, ...doc.data() });
}

export async function PATCH(req: NextRequest, ctx: RouteContext) {
  const auth = await verifyAuth(req);
  if ("error" in auth) return auth.error;

  const { id } = await ctx.params;
  const body = await req.json();
  body.updatedAt = new Date().toISOString();

  await adminDb
    .collection("users")
    .doc(auth.user.uid)
    .collection("cameras")
    .doc(id)
    .update(body);

  return NextResponse.json({ message: "Camera updated" });
}

export async function DELETE(req: NextRequest, ctx: RouteContext) {
  const auth = await verifyAuth(req);
  if ("error" in auth) return auth.error;

  const { id } = await ctx.params;
  await adminDb
    .collection("users")
    .doc(auth.user.uid)
    .collection("cameras")
    .doc(id)
    .delete();

  return NextResponse.json({ message: "Camera deleted" });
}

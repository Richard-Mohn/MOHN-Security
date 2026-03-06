// ============================================================
//  API — /api/events/[id]
//  PATCH  = acknowledge / update event
//  DELETE = remove event
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth-middleware";
import { adminDb } from "@/lib/firebase-admin";

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(req: NextRequest, ctx: RouteContext) {
  const auth = await verifyAuth(req);
  if ("error" in auth) return auth.error;

  const { id } = await ctx.params;
  const body = await req.json();

  await adminDb
    .collection("users")
    .doc(auth.user.uid)
    .collection("events")
    .doc(id)
    .update(body);

  return NextResponse.json({ message: "Event updated" });
}

export async function DELETE(req: NextRequest, ctx: RouteContext) {
  const auth = await verifyAuth(req);
  if ("error" in auth) return auth.error;

  const { id } = await ctx.params;
  await adminDb
    .collection("users")
    .doc(auth.user.uid)
    .collection("events")
    .doc(id)
    .delete();

  return NextResponse.json({ message: "Event deleted" });
}

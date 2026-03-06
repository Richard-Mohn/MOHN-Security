// ============================================================
//  API — /api/automation/[id]
//  PATCH  = update rule (toggle enabled, edit trigger/actions)
//  DELETE = remove rule
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { getUid } from "@/lib/proxy-auth";
import { adminDb } from "@/lib/firebase-admin";

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(req: NextRequest, ctx: RouteContext) {
  const uid = await getUid(req);
  if (!uid) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await ctx.params;
  const body = await req.json();
  body.updatedAt = new Date().toISOString();

  await adminDb
    .collection("users")
    .doc(uid)
    .collection("automation")
    .doc(id)
    .update(body);

  return NextResponse.json({ message: "Rule updated" });
}

export async function DELETE(req: NextRequest, ctx: RouteContext) {
  const uid = await getUid(req);
  if (!uid) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await ctx.params;
  await adminDb
    .collection("users")
    .doc(uid)
    .collection("automation")
    .doc(id)
    .delete();

  return NextResponse.json({ message: "Rule deleted" });
}

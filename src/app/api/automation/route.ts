// ============================================================
//  API — /api/automation
//  GET  = list automation rules
//  POST = create a new automation rule
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
    .collection("automation")
    .orderBy("createdAt", "desc")
    .get();

  const rules = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return NextResponse.json({ rules });
}

export async function POST(req: NextRequest) {
  const auth = await verifyAuth(req);
  if ("error" in auth) return auth.error;

  const body = await req.json();
  const { name, trigger, actions, enabled } = body;

  if (!name || !trigger || !actions) {
    return NextResponse.json(
      { error: "Rule name, trigger, and actions are required" },
      { status: 400 }
    );
  }

  const docRef = await adminDb
    .collection("users")
    .doc(auth.user.uid)
    .collection("automation")
    .add({
      name,
      trigger, // e.g. { type: "person_detected", zone: "Front Porch" }
      actions, // e.g. [{ type: "activate_siren" }, { type: "send_notification" }]
      enabled: enabled !== false,
      lastTriggered: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

  return NextResponse.json({ id: docRef.id, message: "Rule created" }, { status: 201 });
}

// ============================================================
//  Auth middleware — verifies Firebase ID token from request
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";
import { DecodedIdToken } from "firebase-admin/auth";

export async function verifyAuth(
  req: NextRequest
): Promise<{ user: DecodedIdToken } | { error: NextResponse }> {
  const authHeader = req.headers.get("authorization");

  if (!authHeader?.startsWith("Bearer ")) {
    return {
      error: NextResponse.json(
        { error: "Missing or invalid authorization header" },
        { status: 401 }
      ),
    };
  }

  const token = authHeader.split("Bearer ")[1];

  try {
    const decoded = await adminAuth.verifyIdToken(token);
    return { user: decoded };
  } catch {
    return {
      error: NextResponse.json({ error: "Invalid or expired token" }, { status: 401 }),
    };
  }
}

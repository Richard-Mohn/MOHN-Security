// ============================================================
//  Server-side auth helper — proxy pattern
//  Extracts UID from Firebase ID token (Bearer header).
//  Returns uid string or null (no throw, no middleware).
// ============================================================

import { adminAuth } from "@/lib/firebase-admin";

/**
 * Extract the authenticated user's UID from the request.
 * Returns `null` when the token is missing or invalid — callers
 * decide how to handle unauthenticated requests.
 */
export async function getUid(req: Request): Promise<string | null> {
  const header = req.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) return null;

  try {
    const decoded = await adminAuth.verifyIdToken(header.slice(7));
    return decoded.uid;
  } catch {
    return null;
  }
}

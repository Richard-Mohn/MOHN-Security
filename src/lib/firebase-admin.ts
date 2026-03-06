// ============================================================
//  Firebase Admin SDK — server-side only
//  Used by Next.js API routes & server components
// ============================================================

import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

function getAdminApp(): App {
  const existing = getApps();
  if (existing.length > 0) return existing[0];

  // In Firebase App Hosting the GOOGLE_APPLICATION_CREDENTIALS or
  // Application Default Credentials are auto-injected by the environment.
  // For local dev you can set FIREBASE_SERVICE_ACCOUNT_KEY as a JSON string
  // or place a service-account.json in the project root.

  const serviceAccountJSON = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (serviceAccountJSON) {
    const serviceAccount = JSON.parse(serviceAccountJSON);
    return initializeApp({
      credential: cert(serviceAccount),
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "mohnsecurity",
    });
  }

  // Fall back to Application Default Credentials (works in Firebase App Hosting)
  return initializeApp({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "mohnsecurity",
  });
}

const app = getAdminApp();

export const adminAuth = getAuth(app);
export const adminDb = getFirestore(app);

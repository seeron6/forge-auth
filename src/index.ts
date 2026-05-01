// Forge — Auth & Sessions. Magic-link + step-up MFA reference.

import { randomBytes, createHash } from 'node:crypto';

export interface MagicLink {
  token: string;
  email: string;
  expiresAt: number;
}

export function issueMagicLink(email: string, ttlSeconds = 900): MagicLink {
  const token = randomBytes(24).toString('base64url');
  return { token, email, expiresAt: Date.now() + ttlSeconds * 1000 };
}

export function hashToken(token: string): string {
  return createHash('sha256').update(token).digest('hex');
}

export interface Session {
  id: string;
  userId: string;
  createdAt: number;
  lastSeenAt: number;
  stepUp?: { method: 'totp' | 'webauthn'; verifiedAt: number };
}

export function startSession(userId: string): Session {
  const now = Date.now();
  return {
    id: randomBytes(16).toString('hex'),
    userId,
    createdAt: now,
    lastSeenAt: now,
  };
}

export function requiresStepUp(s: Session, sensitive: boolean): boolean {
  if (!sensitive) return false;
  if (!s.stepUp) return true;
  return Date.now() - s.stepUp.verifiedAt > 5 * 60_000;
}

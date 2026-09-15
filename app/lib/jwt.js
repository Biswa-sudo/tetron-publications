import { createHmac } from "node:crypto";

const encodeBase64Url = (value) => Buffer.from(value).toString("base64url");

function signJwt(payload, secret) {
  const header = { alg: "HS256", typ: "JWT" };
  const headerSegment = encodeBase64Url(JSON.stringify(header));
  const payloadSegment = encodeBase64Url(JSON.stringify(payload));
  const signature = createHmac("sha256", secret)
    .update(`${headerSegment}.${payloadSegment}`)
    .digest("base64url");

  return `${headerSegment}.${payloadSegment}.${signature}`;
}

export function signToken(userId, email, role) {
  const now = Math.floor(Date.now() / 1000);
  const secret = process.env.JWT_SECRET || "development-secret";

  return signJwt(
    {
      sub: String(userId),
      email,
      role,
      iat: now,
      exp: now + 7 * 24 * 60 * 60,
    },
    secret
  );
}

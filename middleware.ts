import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function unauthorizedResponse(): NextResponse {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="TaxSimpl Studio", charset="UTF-8"',
    },
  });
}

export function middleware(req: NextRequest) {
  // Protect embedded Sanity Studio from public access.
  const username = process.env.STUDIO_BASIC_AUTH_USER;
  const password = process.env.STUDIO_BASIC_AUTH_PASS;

  // Fail closed if credentials are missing.
  if (!username || !password) return unauthorizedResponse();

  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) return unauthorizedResponse();

  const base64 = authHeader.slice("Basic ".length);
  let decoded = "";
  try {
    decoded = Buffer.from(base64, "base64").toString("utf8");
  } catch {
    return unauthorizedResponse();
  }

  const separatorIndex = decoded.indexOf(":");
  if (separatorIndex < 0) return unauthorizedResponse();

  const providedUser = decoded.slice(0, separatorIndex);
  const providedPass = decoded.slice(separatorIndex + 1);

  if (providedUser !== username || providedPass !== password) {
    return unauthorizedResponse();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio/:path*"],
};


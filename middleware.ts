import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const show = process.env.NEXT_PUBLIC_SHOW_COMING_SOON === "true";
  const url = request.nextUrl;
  if (show && url.pathname === "/") {
    url.pathname = "/coming-soon";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

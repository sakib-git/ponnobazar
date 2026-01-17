
import { NextResponse } from "next/server";

export function middleware(request) {
  // Cookie read
  const authCookie = request.cookies.get("auth");

  // Middleware check
  if (!authCookie || authCookie.value !== "true") {

    return NextResponse.redirect(new URL("/login", request.url));
  }


  return NextResponse.next();
}


export const config = {
  matcher: ["/allproduct/:path*"],
};

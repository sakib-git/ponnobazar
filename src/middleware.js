// import { NextResponse } from 'next/server';

// export function proxy(request) {
//   const isLoggedIn = request.cookies.get('auth')?.value === 'true';

//   if (!isLoggedIn) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   return NextResponse.next();
// }


// export const config = {
//   matcher: ["/allproduct", "/allproduct/:path*"],
// };
// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  // Cookie read
  const authCookie = request.cookies.get("auth");

  // Middleware check
  if (!authCookie || authCookie.value !== "true") {
    // Redirect to login page
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // User logged in, continue
  return NextResponse.next();
}

// Protect /allproduct and nested routes
export const config = {
  matcher: ["/allproduct/:path*"],
};

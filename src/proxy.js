// import { NextResponse } from 'next/server';

// export function proxy(request) {
//   const isLoggedIn = request.cookies.get('auth')?.value === 'true';

//   if (!isLoggedIn) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/allproduct/:path*"],
// };

import { NextResponse } from "next/server";
;

export function proxy(req) {
  const token = req.cookies.get('auth')?.value;

  if (token !== 'true') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/allproduct', '/addtocart'],
};

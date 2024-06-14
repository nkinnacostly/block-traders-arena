// middleware.js

import { NextResponse } from "next/server";

export default function middleware(req) {
  // console.log(req);
  // let loggedin = req.cookies.get("__session");
  // const { pathname } = req.nextUrl;
  // if (loggedin && pathname === "/auth/login") {
  //   return NextResponse.redirect(new URL("/dashboard", "127.0.0.1:3000"));
  // }
  // if (!loggedin && pathname.includes("/dashboard")) {
  //   return NextResponse.redirect(new URL("/auth/login", "127.0.0.1:3000"));
  // }
}

// export const config = {
//   matcher: "/((?!api|static|.*\\..*|_next).*)",
// };

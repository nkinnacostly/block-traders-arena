// middleware.js

import { NextResponse } from "next/server";

export default function middleware(req) {
  let loggedin = req.cookies.get("__session");
  const { pathname } = req.nextUrl;
  if (loggedin && pathname === "/auth/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!loggedin && pathname.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const url = new URL('/', request.url);
    console.log('URL:', url);
    return NextResponse.redirect(url);
}

export const config = {
    matcher: ["/dashboard/:path*"],
}
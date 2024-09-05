import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
export function middleware(req) {
    // const cookies = new Cookies(req, new NextResponse())
    const provider_token = req.cookies.get('provider-token')
    if(req.nextUrl.pathname === '/' && provider_token){
        if(req.nextUrl.pathname !== '/supplier/dashboard'){
        return NextResponse.redirect(new URL('/supplier/dashboard', req.url))
        }
    }
    
    return NextResponse.next()
}
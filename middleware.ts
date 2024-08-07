import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isSupportedLocale } from './helpers/langHelper';



export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const url = req.nextUrl.clone();



    // If the pathname is not register or login, skip this middleware
    if (pathname !== '/register' && pathname !== '/login') {
        return NextResponse.next();
    }

    // Check for Authorization header
    const authHeader = req.headers.get('authorization');

    // If the token exists, redirect to home page
    if (authHeader && authHeader.startsWith('Bearer ')) {
        url.pathname = '/';
        return NextResponse.redirect(url);
    }

    // If no token, continue to the requested page
    return NextResponse.next();
}

export const config = {
    matcher: ['/register', '/login', '/', '/about', '/contact'],
};

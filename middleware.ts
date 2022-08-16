import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest): Promise<NextResponse> {
    console.log('middleware', req.url);
    return NextResponse.next();
}

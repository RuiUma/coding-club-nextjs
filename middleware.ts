import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {



    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-middleware-test', 'hello')
    const sec = requestHeaders.get('Coding-Clubs')
    if (sec !== process.env.REQ_HEADER_AUTH) {
        console.log(sec);
        console.log();
        
        console.log(process.env.REQ_HEADER_AUTH);
        
        return new NextResponse(
            JSON.stringify({
                message: 'Ha Ha Ha Ha Fool!'
            }),
            {
                status: 404,
            })
    }
    const response = NextResponse.next({
        headers: requestHeaders
    })
    response.headers.set('x-middleware-test', 'hello')
    return response
    
    
}
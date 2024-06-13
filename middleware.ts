import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { headers } from 'next/headers'

export async function middleware(request: NextRequest) {
    const headerList = headers()
    console.log('headerList: ');
    console.log(headerList);
    
    const sec = request.headers.get('Coding-Clubs')
    console.log('headers from request:');
    console.log(request.headers);
    
    
    // if (sec !== process.env.REQ_HEADER_AUTH_KEY) {
    //     console.log('sec: ' + sec);
    //     console.log('env: '+ process.env.REQ_HEADER_AUTH_KEY);
        
        
    //     return new NextResponse(
    //         JSON.stringify({
    //             message: 'Ha Ha Ha Ha Fool!'
    //         }),
    //         {
    //             status: 404,
    //         })
    // }
    const response = NextResponse.next()
    response.headers.set('x-middleware-test', 'hello')
    return response
    
    
}
import { NextResponse } from 'next/server';
import { withAuth } from "next-auth/middleware"


// export const config = { matcher: ["/profile/:path","/profile-settings/:path"] }

// export function middleware(request: Request) {

//   // Store current request url in a custom header, which you can read later
//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set('x-url', request.url);

//   return NextResponse.next({
//     request: {
//       // Apply new request headers
//       headers: requestHeaders,
//     }
//   });
// }

export default withAuth(
  function middleware (request: Request) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-url', request.url);
    return NextResponse.next({
      request: {
        // Apply new request headers
        headers: requestHeaders,
      }
    });
    },
    {
      callbacks: {
        authorized: ({ req, token }) => {
          if (
            req.nextUrl.pathname.startsWith('/profile') || req.nextUrl.pathname.startsWith('/profile-settings') || req.nextUrl.pathname.startsWith('/admin') 
          ) {
            if (token === null ){
              return false
            }
          }
          return true
        }
      }
    }
)


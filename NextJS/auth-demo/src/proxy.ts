import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/user-profile']);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware(async (auth, req) => {
  // 1. Force login for both User Profile AND Admin routes
  if (isProtectedRoute(req) || isAdminRoute(req)) {
     await auth.protect();
  }

  // 2. Check for Admin Role
  // Note: Ensure your Clerk Dashboard JWT template includes "role" in metadata
  if (isAdminRoute(req)) {
    const { sessionClaims } = await auth();
    
    // Adjust 'public_metadata' based on your actual data structure
    const role = sessionClaims?.metadata?.role || sessionClaims?.public_metadata?.role;

    if (role !== "admin") {
      // FIX: Redirect to Home (/) or an Unauthorized page, NOT req.url
      const homeUrl = new URL('/', req.url);
      return NextResponse.redirect(homeUrl);
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
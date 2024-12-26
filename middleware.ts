import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
    '/sign-in(.)', '/sign-up(.)',
    '/api/webhooks/clerk(.*)',
    '/api/clerk/webhook(.*)',
    '/api/webhooks(.*)'
])
{/* for a provider route '/' */}  
const isProtectedRoute = createRouteMatcher(['/dashboard(.)', '/forum(.)', '/profile(.*)', '/home'])

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request) && isProtectedRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Protect all pages except static files
    "/((?!_next|.\\..).*)", 

    // Always run for API routes
    "/api/(.*)",
  ],
};
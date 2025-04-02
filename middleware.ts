import { createI18nMiddleware } from "next-international/middleware"
import { type NextRequest, NextResponse } from "next/server"
import { updateSession } from "./lib/supabase/clients/middleware"

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "id"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
})

export async function middleware(request: NextRequest) {
  const { response, user } = await updateSession(
    request,
    I18nMiddleware(request)
  )

  // Redirect to login if not logged in and not on login page
  if (!request.nextUrl.pathname.endsWith("/login") && !user) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Redirect to home page if logged in and trying to access login page
  if (request.nextUrl.pathname.endsWith("/login") && user) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return response
}

export const config = {
  matcher: [
    "/((?!_next/static|api|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}

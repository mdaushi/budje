"use client"
import { SIDEBAR_MENU_CONFIG } from "@/config/navigation"
import { useI18n, useScopedI18n } from "@/locales/client"
import { User } from "@/types"
import { SidebarInset, SidebarProvider } from "./ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import { NavUser } from "./nav-user"

interface AppLayoutProps {
  user: User
  children: React.ReactNode
}

export default function AppLayout({ user, children }: AppLayoutProps) {
  const t = useI18n()
  // Transform menu config to include translated titles
  const menus = SIDEBAR_MENU_CONFIG.map((menu) => ({
    ...menu,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    title: t(menu.translationKey as any, {}),
  }))

  // Set CSS variables for layout dimensions
  const layoutStyles = {
    "--sidebar-width": "calc(var(--spacing) * 72)",
    "--header-height": "calc(var(--spacing) * 12)",
  } as React.CSSProperties

  return (
    <SidebarProvider style={layoutStyles}>
      <AppSidebar
        variant="inset"
        navUser={<NavUser user={user} />}
        menus={menus}
      />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}

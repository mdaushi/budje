import { AppSidebar } from "@/components/app-sidebar"
import { NavUser } from "@/components/nav-user"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { getUser } from "@/lib/supabase/queries"
import { User } from "@/types"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data } = await getUser()

  const user: User = {
    name: data.user?.user_metadata.name,
    email: data.user?.email ?? "",
    avatar: data.user?.user_metadata.avatar_url,
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" navUser={<NavUser user={user} />} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}

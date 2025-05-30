"use client"

import * as React from "react"
import { IconInnerShadowTop } from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Menu } from "@/types"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  navUser: React.ReactNode
  menus: Menu[]
}

export function AppSidebar({ navUser, menus, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={menus} />
        {/* <NavDocuments items={data.documents} /> */}
        <NavSecondary items={[]} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>{navUser}</SidebarFooter>
    </Sidebar>
  )
}

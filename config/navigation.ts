import { Menu } from "@/types"
import { IconDashboard } from "@tabler/icons-react"

export const SIDEBAR_MENU_CONFIG: Menu[] = [
  {
    title: "dashboard",
    url: "/dashboard",
    icon: IconDashboard,
    translationKey: "navigation.dashboard",
  },
]

import { type Icon } from "@tabler/icons-react"

export type User = {
  name: string
  email: string
  avatar: string
}

export type Menu = {
  title: string
  url: string
  icon: Icon
  translationKey: string
}

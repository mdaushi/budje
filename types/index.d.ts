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

export type Saving = {
  id: string
  title: string
  description: string
  targetAmount: number
  currentAmount: number
  deadline: string
  category: string
  frequency: "daily" | "weekly" | "monthly" | "yearly" | "bi-weekly"
  status: "not-started" | "in-progress" | "completed"
  streak: number
  nextContribution: string | null
  contributionAmount: number
  milestones: {
    percent: number
    achieved: boolean
    reward: string
  }[]
}

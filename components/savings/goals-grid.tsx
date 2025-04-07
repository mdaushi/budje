"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Plus, Calendar, DollarSign, Clock, Sparkles } from "lucide-react"
import { Saving } from "@/types"
import { Label } from "../ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { IconPlus } from "@tabler/icons-react"
import { Drawer } from "../drawer"

const sampleGoals: Saving[] = [
  {
    id: "1",
    title: "Emergency Fund",
    description: "3 months of living expenses",
    targetAmount: 9000,
    currentAmount: 3600,
    deadline: "2023-12-31",
    category: "emergency",
    frequency: "weekly",
    status: "in-progress",
    streak: 8,
    nextContribution: "2023-06-15",
    contributionAmount: 200,
    milestones: [
      { percent: 25, achieved: true, reward: "Bronze Badge" },
      { percent: 50, achieved: false, reward: "Silver Badge" },
      { percent: 75, achieved: false, reward: "Gold Badge" },
      { percent: 100, achieved: false, reward: "Platinum Badge" },
    ],
  },
  {
    id: "2",
    title: "New Laptop",
    description: "MacBook Pro for work",
    targetAmount: 2000,
    currentAmount: 1200,
    deadline: "2023-09-15",
    category: "tech",
    frequency: "monthly",
    status: "in-progress",
    streak: 4,
    nextContribution: "2023-07-01",
    contributionAmount: 300,
    milestones: [
      { percent: 25, achieved: true, reward: "Bronze Badge" },
      { percent: 50, achieved: true, reward: "Silver Badge" },
      { percent: 75, achieved: false, reward: "Gold Badge" },
      { percent: 100, achieved: false, reward: "Platinum Badge" },
    ],
  },
  {
    id: "3",
    title: "Vacation Fund",
    description: "Trip to Bali",
    targetAmount: 3500,
    currentAmount: 3500,
    deadline: "2023-07-01",
    category: "travel",
    frequency: "bi-weekly",
    status: "completed",
    streak: 12,
    nextContribution: null,
    contributionAmount: 0,
    milestones: [
      { percent: 25, achieved: true, reward: "Bronze Badge" },
      { percent: 50, achieved: true, reward: "Silver Badge" },
      { percent: 75, achieved: true, reward: "Gold Badge" },
      { percent: 100, achieved: true, reward: "Platinum Badge" },
    ],
  },
  {
    id: "4",
    title: "Down Payment",
    description: "For dream house",
    targetAmount: 50000,
    currentAmount: 12500,
    deadline: "2025-01-01",
    category: "home",
    frequency: "monthly",
    status: "in-progress",
    streak: 6,
    nextContribution: "2023-07-01",
    contributionAmount: 1000,
    milestones: [
      { percent: 25, achieved: true, reward: "Bronze Badge" },
      { percent: 50, achieved: false, reward: "Silver Badge" },
      { percent: 75, achieved: false, reward: "Gold Badge" },
      { percent: 100, achieved: false, reward: "Platinum Badge" },
    ],
  },
]

export function GoalsGrid() {
  const [goals, setGoals] = useState(sampleGoals)

  const [activeTab, setActiveTab] = useState("all")

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <Tabs
      defaultValue="all"
      className="w-full flex-col justify-start gap-6"
      value={activeTab}
      onValueChange={handleTabChange}
    >
      <div className="flex items-center justify-between px-4 lg:px-6">
        <Label htmlFor="view-selector" className="sr-only">
          View
        </Label>

        {/* Mobile Select - synced with active tab */}
        <Select
          defaultValue="all"
          value={activeTab}
          onValueChange={handleTabChange}
        >
          <SelectTrigger
            className="flex w-fit @4xl/main:hidden"
            size="sm"
            id="view-selector"
          >
            <SelectValue placeholder="Select a view" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Savings</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="upcoming">Upcoming Contributions</SelectItem>
          </SelectContent>
        </Select>

        <TabsList className="**:data-[slot=badge]:bg-muted-foreground/30 hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex">
          <TabsTrigger value="all">All Savings</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Contributions</TabsTrigger>
        </TabsList>

        <Link href="/savings/create" prefetch={true}>
          <Button variant="outline" size="sm">
            <IconPlus />
            <span className="hidden lg:inline">Add Saving</span>
          </Button>
        </Link>
      </div>

      <TabsContent value="all" className="space-y-8 px-4 lg:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
          <Card className="flex flex-col items-center justify-center h-full min-h-[320px] border-dashed">
            <Link href="#" className="h-full w-full">
              <Button
                variant="ghost"
                className="flex flex-col h-full w-full gap-4 p-6"
              >
                <div className="size-12 rounded-full bg-muted flex items-center justify-center">
                  <Plus className="h-6 w-6 text-muted-foreground" />
                </div>
                <span className="text-base font-medium text-muted-foreground">
                  Add New Goal
                </span>
              </Button>
            </Link>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="in-progress" className="space-y-4 px-4 lg:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {goals
            .filter((goal) => goal.status === "in-progress")
            .map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
        </div>
      </TabsContent>

      <TabsContent value="completed" className="space-y-4 px-4 lg:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {goals
            .filter((goal) => goal.status === "completed")
            .map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
        </div>
      </TabsContent>

      <TabsContent value="upcoming" className="space-y-4 px-4 lg:px-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Contributions</CardTitle>
            <CardDescription>
              Your scheduled contributions for the next 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {goals
                .filter(
                  (goal) =>
                    goal.status === "in-progress" && goal.nextContribution
                )
                .sort(
                  (a, b) =>
                    new Date(a.nextContribution!).getTime() -
                    new Date(b.nextContribution!).getTime()
                )
                .map((goal) => (
                  <div
                    key={goal.id}
                    className="flex items-center justify-between p-4 rounded-lg border"
                  >
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-muted flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium">{goal.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          Next contribution:{" "}
                          {new Date(
                            goal.nextContribution!
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">
                        ${goal.contributionAmount}
                      </span>
                      {/* <Button size="sm" variant="outline">
                        Contribute Now
                      </Button> */}
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

function GoalCard({ goal }: { goal: Saving }) {
  const progress = Math.round((goal.currentAmount / goal.targetAmount) * 100)

  // Find the next milestone that hasn't been achieved yet
  const nextMilestone = goal.milestones.find((m) => !m.achieved)

  return (
    <Card className="overflow-hidden transition-all hover:shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              {goal.title}
              {goal.streak >= 5 && (
                <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-600 dark:bg-amber-900/20 dark:text-amber-400">
                  <Sparkles className="mr-1 h-3 w-3" />
                  {goal.streak} streak
                </span>
              )}
            </CardTitle>
            <CardDescription>{goal.description}</CardDescription>
          </div>
          <Badge
            variant={goal.status === "completed" ? "default" : "outline"}
            className={
              goal.status === "completed"
                ? "bg-green-500 hover:bg-green-500/90"
                : ""
            }
          >
            {goal.status === "completed" ? "Completed" : "In Progress"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1 text-sm">
              <span className="font-medium">Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="relative">
              <Progress value={progress} className="h-2" />
              {goal.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`absolute top-0 size-2 rounded-full border border-background ${milestone.achieved ? "bg-primary" : "bg-muted"}`}
                  style={{
                    left: `${milestone.percent}%`,
                    transform: "translateX(-50%)",
                  }}
                  title={`${milestone.percent}% - ${milestone.reward}`}
                />
              ))}
            </div>

            {nextMilestone && (
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>Next milestone: {nextMilestone.percent}%</span>
                <span>{nextMilestone.reward}</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs text-muted-foreground">Current</p>
              <p className="font-medium">
                ${goal.currentAmount.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">Target</p>
              <p className="font-medium">
                ${goal.targetAmount.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">Deadline</p>
              <p className="font-medium">
                {new Date(goal.deadline).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">Frequency</p>
              <p className="font-medium capitalize">{goal.frequency}</p>
            </div>
          </div>

          {goal.status === "in-progress" && goal.nextContribution && (
            <div className="mt-2 p-3 bg-muted rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    Next: {new Date(goal.nextContribution).toLocaleDateString()}
                  </span>
                </div>
                <span className="text-sm font-medium">
                  ${goal.contributionAmount}
                </span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </Button>
        {goal.status === "in-progress" ? (
          <Button size="sm" className="flex-1">
            <DollarSign className="mr-2 h-4 w-4" />
            Add Funds
          </Button>
        ) : (
          <Button variant="outline" size="sm" className="flex-1">
            <Clock className="mr-2 h-4 w-4" />
            History
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

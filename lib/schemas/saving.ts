import { description } from "@/components/chart-area-interactive"
import { z } from "zod"

export const savingFormSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  targetAmount: z.number().min(1, { message: "Amount is required" }),
  initialAmount: z.number().min(1, { message: "Initial amount is required" }),
  target: z.number().min(1, { message: "Target is required" }),
  deadline: z.date({
    required_error: "Please select a deadline date.",
  }),
})

export type SavingFormValues = z.infer<typeof savingFormSchema>

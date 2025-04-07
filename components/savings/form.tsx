import { useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { savingFormSchema, SavingFormValues } from "@/lib/schemas/saving"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Textarea } from "../ui/textarea"
import { DatePicker } from "../ui/date-picker"

export function FormSaving() {
  const form = useForm({
    resolver: zodResolver(savingFormSchema),
  })

  const onSubmit = (values: SavingFormValues) => {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form
        id="form-saving"
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  placeholder="Enter description"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            name="targetAmount"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target Amount</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  The total amount you want to save
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="initialAmount"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Initial Amount</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Amount you have already saved (if any)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Target Date</FormLabel>
              <DatePicker date={field.value} setDate={field.onChange} />
              <FormDescription>
                When do you want to reach this goal?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

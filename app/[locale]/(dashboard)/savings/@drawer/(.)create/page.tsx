"use client"

import { Drawer } from "@/components/drawer"
import { FormSaving } from "@/components/savings/form"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateSavingsDrawer() {
  const router = useRouter()

  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
    setTimeout(() => {
      router.back()
    }, 300) // Delay untuk animasi closing
  }

  return (
    <Drawer
      open={open}
      onOpenChange={handleClose}
      title="Add New Saving"
      description="Create a new saving goal"
      submitButton={{
        form: "form-saving",
        children: "Create Saving",
      }}
    >
      <FormSaving />
    </Drawer>
  )
}

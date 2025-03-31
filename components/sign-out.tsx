"use client"

import { createClient } from "@/lib/supabase/clients/client"
import { Button } from "./ui/button"

export function SignOut() {
  const supabase = createClient()

  const handleSignOut = () => {
    supabase.auth.signOut()
  }

  return (
    <Button
      onClick={handleSignOut}
      variant="outline"
      className="font-mono gap-2 flex items-center"
    >
      <span>Sign out</span>
    </Button>
  )
}

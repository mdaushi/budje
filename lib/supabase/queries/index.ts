import { createClient } from "../clients/server"

export async function getUser() {
  const supabase = createClient()

  try {
    const result = await (await supabase).auth.getUser()

    return result
  } catch (error) {
    throw error
  }
}

export async function getPosts() {
  const supabase = createClient()

  try {
    const result = await (await supabase).from("posts").select("*")

    return result
  } catch (error) {
    throw error
  }
}

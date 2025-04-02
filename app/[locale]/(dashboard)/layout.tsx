import AppLayout from "@/components/app-layout"
import { getUser } from "@/lib/supabase/queries"
import { I18nProviderClient } from "@/locales/client"
import { User } from "@/types"

export default async function Layout({
  children,
  params,
}: {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}) {
  const { locale } = await params

  const { data } = await getUser()

  const user: User = {
    name: data.user?.user_metadata.name,
    email: data.user?.email ?? "",
    avatar: data.user?.user_metadata.avatar_url,
  }

  return (
    <I18nProviderClient locale={locale}>
      <AppLayout user={user}>{children}</AppLayout>
    </I18nProviderClient>
  )
}

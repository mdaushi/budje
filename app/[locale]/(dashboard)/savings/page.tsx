import { AppHeader } from "@/components/app-header"
import { GoalsGrid } from "@/components/savings/goals-grid"
import { SectionCards } from "@/components/savings/section-cards"
import { getI18n } from "@/locales/server"

export default async function SavingsPage() {
  const t = await getI18n()
  return (
    <>
      <AppHeader title={t("saving.plural")} />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <GoalsGrid />
          </div>
        </div>
      </div>
    </>
  )
}

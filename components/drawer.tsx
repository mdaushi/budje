import { useIsMobile } from "@/hooks/use-mobile"
import {
  DrawerClose,
  Drawer as DrawerComp,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer"
import { Button } from "./ui/button"

interface DrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void

  title: string
  description: string

  children: React.ReactNode

  submitButton?: {
    form: string
    children: React.ReactNode
  }
}

export function Drawer({
  open,
  onOpenChange,
  title,
  description,
  children,
  submitButton,
}: DrawerProps) {
  const isMobile = useIsMobile()

  return (
    <DrawerComp
      direction={isMobile ? "bottom" : "right"}
      open={open}
      onOpenChange={onOpenChange}
    >
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
          {children}
        </div>
        <DrawerFooter>
          {submitButton ? (
            <Button type="submit" form={submitButton.form} className="w-full">
              {submitButton.children}
            </Button>
          ) : (
            <Button>Submit</Button>
          )}
          <DrawerClose asChild>
            <Button variant="outline">CLose</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </DrawerComp>
  )
}

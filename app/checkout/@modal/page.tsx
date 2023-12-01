import { LaunchCard } from '@/components/LaunchCard';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { getLaunches } from '@/lib/graphql/queries'
import Image from 'next/image'

export default async function Launch() {
  // maybe some query?
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>Open</button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          Hello
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <button type="submit">Save changes</button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

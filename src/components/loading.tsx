import { LoaderCircle } from 'lucide-react'

export const Loading = () => {
  return (
    <div className="mx-auto mt-36 flex flex-col items-center gap-2">
      <LoaderCircle className="size-10 animate-spin text-neutral-800" />
      <p className="text-sm text-neutral-800">Loading...</p>
    </div>
  )
}

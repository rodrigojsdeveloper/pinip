import { CircleAlert } from 'lucide-react'

export const HeaderInformation = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-row items-center gap-1 border-b border-solid border-neutral-500 pb-1">
      <CircleAlert className="size-4 text-neutral-500" />
      <h2 className="text-sm uppercase text-neutral-500">{title}</h2>
    </div>
  )
}

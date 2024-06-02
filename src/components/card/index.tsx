import { PropsWithChildren } from 'react'

interface CardProps {
  title: string
}

export const Card = ({ title, children }: PropsWithChildren<CardProps>) => {
  return (
    <div className="w-full border-2 border-solid border-neutral-800 shadow-[0.4rem_0.4rem_0] shadow-neutral-800">
      <div className="flex flex-row items-center justify-between border-b-2 border-solid border-neutral-800 px-4 py-1">
        <h2 className="text-base uppercase text-neutral-800">{title}</h2>

        <ul className="flex flex-row items-center gap-2">
          <li className="size-4 rounded-full border-2 border-solid border-neutral-800" />
          <li className="size-4 rounded-full border-2 border-solid border-neutral-800" />
          <li className="size-4 rounded-full border-2 border-solid border-neutral-800 bg-neutral-800" />
        </ul>
      </div>

      <div className="size-[400px]">{children}</div>
    </div>
  )
}

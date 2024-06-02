'use client'

import { useContext, useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Search as SearchIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { IpData, ipSchema } from '@/schemas/ip'
import { InformationContext } from '@/contexts/information.context'

export const Search = () => {
  const { handleInformation, error } = useContext(InformationContext)
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<IpData>({
    resolver: zodResolver(ipSchema),
  })

  const onSubmit = handleSubmit((data: IpData) => {
    handleInformation(data)
    reset()
  })

  useEffect(() => {
    if (error) {
      setError('ip', {
        type: 'manual',
        message: error,
      })
    }
  }, [error, setError])

  return (
    <div className="flex flex-col gap-6">
      <form
        onSubmit={onSubmit}
        className="mx-auto flex h-14 w-full max-w-md flex-row items-center border-2 border-solid border-neutral-800 shadow-[0.4rem_0.4rem_0] shadow-neutral-800"
      >
        <input
          type="text"
          className="h-full w-full px-4 focus:placeholder:text-transparent"
          placeholder="0.0.0"
          autoComplete="off"
          {...register('ip')}
        />
        <hr className="h-4/5 w-0.5 rounded-xl bg-neutral-800" />
        <button className="h-full px-4" type="submit" aria-label="Search Icon">
          <SearchIcon className="size-7 text-neutral-800" />
        </button>
      </form>

      {errors && errors?.ip && (
        <div className="mx-auto flex h-14 w-full max-w-md flex-row items-center border-2 border-solid border-red-800 px-4 shadow-[0.4rem_0.4rem_0] shadow-red-800">
          <span className="text-base text-red-800">
            {errors.ip.message?.toString()}
          </span>
        </div>
      )}
    </div>
  )
}

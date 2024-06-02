import { Search as SearchIcon } from 'lucide-react'

export const Search = () => {
  return (
    <form className="mx-auto flex h-14 w-full max-w-md flex-row items-center gap-4 border-2 border-solid border-neutral-800 py-2 pr-4 shadow-[0.4rem_0.4rem_0] shadow-neutral-800">
      <input
        type="number"
        className="h-full w-full px-4 focus:placeholder:text-transparent"
        placeholder="0.0.0"
      />
      <hr className="h-full w-0.5 rounded-xl bg-neutral-800" />
      <button type="submit" aria-label="Search Icon">
        <SearchIcon className="size-7 text-neutral-800" />
      </button>
    </form>
  )
}

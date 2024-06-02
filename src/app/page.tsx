import { Cards } from '@/components/cards'
import { Header } from '@/components/header'
import { Search } from '@/components/search'

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-16">
      <Header />
      <Cards />
      <Search />
    </main>
  )
}

import { CardInformation } from './card/information'
import { CardMap } from './card/map'

export const Cards = () => {
  return (
    <section className="flex w-full flex-col items-center gap-4 lg:flex-row">
      <CardInformation />
      <CardMap />
    </section>
  )
}

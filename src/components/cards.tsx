import { Card } from './card'
import { CardInformation } from './card/information'

export const Cards = () => {
  return (
    <section className="flex w-full flex-col items-center gap-4 lg:flex-row">
      <CardInformation />
      <Card title="MAP" />
    </section>
  )
}

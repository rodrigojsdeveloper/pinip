import { Card } from './card'

export const Cards = () => {
  return (
    <section className="flex w-full flex-col items-center gap-4 lg:flex-row">
      <Card title="Informações do IP" />
      <Card title="mapa" />
    </section>
  )
}

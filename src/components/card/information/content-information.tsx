export const ContentInformation = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <li>
      <h3 className="text-xs uppercase text-neutral-500">{title}</h3>
      <p className="text-base text-neutral-800">{description}</p>
    </li>
  )
}

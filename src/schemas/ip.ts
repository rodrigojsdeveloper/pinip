import z from 'zod'

export const ipSchema = z.object({
  ip: z.string().min(1, 'Enter the IP.'),
})

export type IpData = z.infer<typeof ipSchema>

import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import { cn } from '@/utils/cn'
import { Providers } from '@/contexts'
import './globals.css'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-kanit',
})

export const metadata: Metadata = {
  title: 'Pin IP',
  description:
    'Online tool that allows you to track and identify the origin of an IP address.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn('px-4 py-20 antialiased sm:px-6', kanit.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

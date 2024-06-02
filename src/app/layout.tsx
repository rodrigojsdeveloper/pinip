import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-kanit',
})

export const metadata: Metadata = {
  title: 'Pin IP',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="px-4 py-24 antialiased sm:px-6">{children}</body>
    </html>
  )
}

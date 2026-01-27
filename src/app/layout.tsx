import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Tansk | Task Manager',
  description:
    'A task manager to help you organize your tasks and stay productive.',
}

export const viewport = {
  themeColor: '#5031ffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  )
}

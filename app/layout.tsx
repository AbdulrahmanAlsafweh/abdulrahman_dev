import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Abdulrahman Safweh | Portfolio',
  description: 'Software Developer Portfolio - Next.js, React, PHP, Flutter',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}

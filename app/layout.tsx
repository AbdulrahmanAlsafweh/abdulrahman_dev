import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Abdulrahman Safweh | Portfolio',
  description: 'Software Developer Portfolio - Next.js, React, PHP, Flutter',
  icons: {
    icon: [
      { url: '/icon.png?v=3', type: 'image/png', sizes: '32x32' },
      { url: '/icon.png?v=3', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: ['/icon.png?v=3'],
    apple: ['/icon.png?v=3'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}

import './globals.css'

export const metadata = {
  title: 'Abdulrahman Safweh | Portfolio',
  description: 'Software Developer Portfolio - Next.js, React, PHP, Flutter',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}

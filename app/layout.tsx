import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wedding Invitation | Naji & Ayisha',
  description: 'Join us as we celebrate the wedding of Naji Ibn Muhammed and Ayisha.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cinzel:wght@400;600;700&family=Great+Vibes&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/assets/hero-optimized.jpg" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}

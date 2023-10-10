import '@radix-ui/themes/styles.css';
import '@/styles/global.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  icons: [
    {
      rel: 'quizletMobile',
      url: '/quizletMobile.svg',
    },
    {
      rel: 'icon',
      url: '/quizletMobile.svg',
    }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

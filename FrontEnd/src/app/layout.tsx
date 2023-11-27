import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import '@/styles/global.css'
import '@/styles/theme-config.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Inter } from 'next/font/google'
import ReactQueryProvider from '@/components/ReactQueryProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  icons: [
    {
      rel: 'quizletMobile',
      url: '/quizletMobile.svg',
    },
    {
      rel: 'icon',
      url: '/quizletMobile.svg',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={inter.variable}
    >
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
          <Theme
            accentColor='grass'
            grayColor='gray'
            scaling='100%'
            panelBackground='translucent'
          >
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  )
}

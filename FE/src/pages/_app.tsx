import '@/styles/global.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Prevent calling the API again on error,
      retry: false,
    },
  },
})

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
)

export default MyApp

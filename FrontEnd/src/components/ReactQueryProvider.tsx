'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

export default function ReactQueryProvider({ children }) {
  const [queryClient] = React.useState(() => new QueryClient())
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

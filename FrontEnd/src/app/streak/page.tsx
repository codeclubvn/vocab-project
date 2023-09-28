import type { Metadata } from 'next'

import { Streak } from '@/components/streak'
import { Main } from '@/layouts/Main'

export const metadata: Metadata = {
  title: 'Streak',
  description: 'Welcome to my streak page!',
}

const Portfolio = () => (
  <Main>
    <Streak />
  </Main>
)

export default Portfolio

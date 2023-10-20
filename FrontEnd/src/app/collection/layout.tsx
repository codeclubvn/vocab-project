import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { Theme } from '@radix-ui/themes'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Theme>
      <Navbar />
      <div className='gap-navbar' />
      <section>{children}</section>
      <Footer />
    </Theme>
  )
}

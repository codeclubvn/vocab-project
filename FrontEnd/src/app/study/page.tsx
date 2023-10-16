import { Theme } from '@radix-ui/themes'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import '@radix-ui/themes/styles.css'
import { Divider } from '@/components/common/Divider'

export default function Page() {
  return (
    <Theme>
      <Navbar />
      <div className='gap-navbar' />
      <div>Study page</div>
      <Divider className='divider h-[1px] w-full bg-black mt-[71px]' />
      <Footer />
    </Theme>
  )
}

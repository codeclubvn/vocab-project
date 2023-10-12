import { Theme } from '@radix-ui/themes'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import Category from '@/components/common/Category/Category'

export default function Page() {
  return (
    <>
      <Theme>
        <Navbar />
        <div className='mt-[var(--navbar-height)] mb-[8rem] md:mb-[0rem]' />
        <h1 className='mt-4'>DANH SACH KHOA HOC</h1>
        <Category />
        <Footer />
      </Theme>
    </>
  )
}

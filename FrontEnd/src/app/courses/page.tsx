import { Theme } from '@radix-ui/themes'

import { CardCourse } from '@/components/common/Card'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import Category from '@/components/common/Category/Category'

export default function Page() {
  return (
    <>
      <Theme>
        <Navbar />
        <div className='mt-[var(--navbar-height)] mb-[8rem] md:mb-[0rem]' />
        <h1 className='ml-4 md:ml-44 lg:ml-52 mt-[100px] text-3xl'>DANH SACH KHOA HOC</h1>
        <div className='md:flex flew-grow mt-10'>
          <Category className='basis-1/3' />
          <div className='basis-1/2'>
            <CardCourse title='Khoa 1' numberOf={15000} author='ABC'/>
            <CardCourse title='Khoa 1' numberOf={15000} author='ABC'/>
            <CardCourse title='Khoa 1' numberOf={15000} author='ABC'/>
            <CardCourse title='Khoa 1' numberOf={15000} author='ABC'/>
          </div>
        </div>
        <Footer />
      </Theme>
    </>
  )
}

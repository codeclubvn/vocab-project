import { Theme } from '@radix-ui/themes'
import { SectionCallToAction, SectionFeedBack } from '@/components/layout/Section'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { Card } from '@/components/common/Card'
import { ButtonCallToAction } from '@/components/common/Button'

export default function Page() {
  return (
    <Theme>
      <Navbar />
      <div className='gap-navbar' />
      <div className='container'>
        <Card
          className='grid grid-cols-2 max-md:grid-cols-1 my-[80px]'
          imageClass='h-[300px] w-full'
          content={
            <div className='p-4'>
              <h2 className='text-2xl font-bold mb-4'>Magically transform your notes with AI</h2>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aspernatur voluptates
                consequuntur obcaecati, consectetur eveniet, recusandae in, optio suscipit
                reiciendis cum? Et, tempore accusamus nulla illo debitis neque delectus obcaecati.
              </p>
              <ButtonCallToAction
                route='/signup'
                className='bg-accent-0 !px-[40px]'
              >
                Đăng ký ngay
              </ButtonCallToAction>
            </div>
          }
        />
        <Card
          className='grid grid-cols-2 max-md:grid-cols-1 my-[80px]'
          imageClass='h-[300px] w-full'
          isReverse
          content={
            <div className='p-4'>
              <h2 className='text-2xl font-bold mb-4'>Tính Năng 1</h2>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aspernatur voluptates
                consequuntur obcaecati, consectetur eveniet, recusandae in, optio suscipit
                reiciendis cum? Et, tempore accusamus nulla illo debitis neque delectus obcaecati.
              </p>
              <ButtonCallToAction
                route='/signup'
                className='bg-accent-0 !px-[40px]'
              >
                Đăng ký ngay
              </ButtonCallToAction>
            </div>
          }
        />
        <Card
          className='grid grid-cols-2 max-md:grid-cols-1 my-[80px]'
          imageClass='h-[300px] w-full'
          content={
            <div className='p-4'>
              <h2 className='text-2xl font-bold mb-4'>Tính Năng 2</h2>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aspernatur voluptates
                consequuntur obcaecati, consectetur eveniet, recusandae in, optio suscipit
                reiciendis cum? Et, tempore accusamus nulla illo debitis neque delectus obcaecati.
              </p>
              <ButtonCallToAction
                route='/collections'
                className='bg-accent-0 !px-[40px]'
              >
                Tạo bộ từ vựng
              </ButtonCallToAction>
            </div>
          }
        />
        <Card
          className='grid grid-cols-2 max-md:grid-cols-1 my-[80px]'
          imageClass='h-[300px] w-full'
          isReverse
          content={
            <div className='p-4'>
              <h2 className='text-2xl font-bold mb-4'>Tính Năng 3</h2>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aspernatur voluptates
                consequuntur obcaecati, consectetur eveniet, recusandae in, optio suscipit
                reiciendis cum? Et, tempore accusamus nulla illo debitis neque delectus obcaecati.
              </p>
              <ButtonCallToAction
                route='/extensions'
                className='bg-accent-0 !px-[40px]'
              >
                Cài đặt extension
              </ButtonCallToAction>
            </div>
          }
        />
      </div>
      <SectionFeedBack />
      <SectionCallToAction />
      <Footer />
    </Theme>
  )
}

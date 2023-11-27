'use client'

import Link from 'next/link'
import Image from 'next/image'
import FormSignIn from '@/components/auth/FormSignIn'
import FormSocial from '@/components/auth/FormSocial'

export default function Page() {
  return (
    <section className='flex h-screen w-full overflow-hidden'>
      <div className='hidden lg:block lg:w-1/2 relative top-0 bottom-0'>
        <h1 className='absolute w-2/3 text-[2.6em] max-w-[300px] mt-10 ml-10 font-bold z-10'>
          Smash sets in your sweats.
        </h1>
        <Image
          fill
          className='absolute object-cover top-0 bottom-0'
          src='/assets/images/example.jpg'
          alt='avt'
        />
        <h2 className='absolute w-2/3 text-5xl text-white font-bold bottom-10 left-10'>Quizlet</h2>
      </div>
      <div className='w-full lg:w-1/2  my-10 flex-1/2 overflow-scroll h-screen'>
        <div className='px-[3.4rem] pb-[3rem]'>
          <div className='flex mb-8 items-center text-2xl font-bold'>
            <Link
              href='/signup'
              prefetch={false}
            >
              <h4 className='text-black'>Đăng kí</h4>
            </Link>
            <h4 className='text-accent ml-4 hover:border-b-0 decoration-wavy decoration-accent underline underline-offset-8'>
              Đăng nhập
            </h4>
          </div>
          <div className='flex flex-col w-full mb-8'>
            <FormSocial />
          </div>
          <div className='relative inline-flex items-center justify-center w-full'>
            <hr className='w-full h-px  bg-gray-200 border-0 ' />
            <span className='absolute px-3 font-medium text-gray-700 -translate-x-1/5 bg-white'>
              hoặc với Email
            </span>
          </div>
          <div className='py-10'>
            <FormSignIn />
          </div>
        </div>
      </div>
    </section>
  )
}

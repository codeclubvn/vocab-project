'use client'
import { Theme } from '@radix-ui/themes'
import { userApi } from '@/services/user'
import ButtonSocialAuthen from '@/components/common/Button/ButtonSocialAuthen'
import Link from 'next/link'
import FormSignIn from '@/components/Form/FormSignIn'
import { FacebookIcon, GoogleIcon, NotionIcon } from '@/components/common/Icons'
import Authentication from '@/services/authen'

export default function Page() {
  const handleSignInWithFirebase = (response: any) => {
    console.log(response)
    userApi.addFireBase(response.user)
  }

  return (
    <Theme>
      <section className='flex h-screen w-full overflow-hidden'>
        <div className='hidden lg:block lg:w-1/2 relative top-0 bottom-0'>
          <h1 className='absolute w-2/3 text-[2.6em] max-w-[300px] mt-10 ml-10 font-bold z-10'>
            Smash sets in your sweats.
          </h1>
          <img
            className='absolute object-cover top-0 bottom-0'
            src='https://assets.quizlet.com/_next/static/media/QZ_Auth_LightV2.d6b0ba3d.png'
            alt='avt'
          />
          <h2 className='absolute w-2/3 text-5xl text-white font-bold bottom-10 left-10'>
            Quizlet
          </h2>
        </div>
        <div className='w-full lg:w-1/2  my-10 flex-1/2 overflow-scroll h-screen'>
          <div className='px-[3.4rem] pb-[3rem]'>
            <div className='flex mb-8 text-2xl font-bold'>
              <Link
                href='/signup'
                className='mr-10 hover:border-b-0 '
              >
                Đăng kí
              </Link>
              <h1 className='hover:border-b-0 decoration-wavy mb-4 decoration-[#e372ff] underline underline-offset-8'>
                Đăng nhập
              </h1>
            </div>
            <div className='flex flex-col w-full mb-8'>
              <ButtonSocialAuthen
                description='Đăng nhập với Google'
                onClick={() => Authentication.signGoogle(handleSignInWithFirebase)}
                icon={<GoogleIcon className='inline-block w-6 h-6 mr-2 mb-1' />}
              />
              <ButtonSocialAuthen
                description='Đăng nhập với Facebook'
                onClick={() => Authentication.signFacebook(handleSignInWithFirebase)}
                icon={<FacebookIcon className='inline-block w-6 h-6 mr-2 mb-1' />}
              />
              <ButtonSocialAuthen
                description='Đăng nhập với Notion'
                onClick={() => Authentication.signGithub(handleSignInWithFirebase)}
                icon={<NotionIcon className='inline-block w-6 h-6 mr-2 mb-1' />}
              />
            </div>
            <div className='relative inline-flex items-center justify-center w-full'>
              <hr className='w-full h-px  bg-gray-200 border-0 dark:bg-gray-700' />
              <span className='absolute px-3 font-medium text-gray-700 -translate-x-1/5 bg-white dark:text-white dark:bg-gray-900'>
                hoặc với Email
              </span>
            </div>
            <div className='py-10'>
              <FormSignIn />
            </div>
          </div>
        </div>
      </section>
    </Theme>
  )
}

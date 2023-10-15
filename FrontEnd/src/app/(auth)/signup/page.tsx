'use client'

import ButtonSocialAuthen from '@/components/common/Button/ButtonSocialAuthen'
import { Link, Theme } from '@radix-ui/themes'
import Authentication from '@/services/authen'
import FormSignUp from '@/components/auth/FormSignUp'

export default function Page() {
  const handleSignUpWithSocialAccount = () => {}

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
              <h1 className='mr-10 hover:border-b-0 decoration-wavy decoration-[#e372ff] underline underline-offset-8 '>
                Đăng kí
              </h1>
              <Link
                href='/signin'
                className='hover:border-b-0 mb-4 text-black'
              >
                Đăng nhập
              </Link>
            </div>
            <div className='flex flex-col w-full mb-8'>
              <ButtonSocialAuthen
                description='Đăng ký với Google'
                onClick={() => Authentication.signGoogle(handleSignUpWithSocialAccount)}
                icon={
                  <img
                    src='/assets/icons/google.svg'
                    alt='Login with Social Media'
                    width={6}
                    height={6}
                    className='inline-block w-6 h-6 mr-2 mb-1'
                  />
                }
              />
              <ButtonSocialAuthen
                description='Đăng ký với Facebook'
                onClick={() => Authentication.signFacebook(handleSignUpWithSocialAccount)}
                icon={
                  <img
                    src='/assets/icons/facebook.svg'
                    alt='Login with Social Media'
                    width={6}
                    height={6}
                    className='inline-block w-6 h-6 mr-2 mb-1'
                  />
                }
              />
              <ButtonSocialAuthen
                description='Đăng ký với Notion'
                onClick={() => Authentication.signGithub(handleSignUpWithSocialAccount)}
                icon={
                  <img
                    src='/assets/icons/notion.svg'
                    alt='Login with Social Media'
                    width={6}
                    height={6}
                    className='inline-block w-6 h-6 mr-2 mb-1'
                  />
                }
              />
            </div>
            <div className='relative inline-flex items-center justify-center w-full'>
              <hr className='w-full h-px  bg-gray-200 border-0 dark:bg-gray-700' />
              <span className='absolute px-3 font-medium text-gray-700 -translate-x-1/5 bg-white dark:text-white dark:bg-gray-900'>
                hoặc với Email
              </span>
            </div>
            <div className='py-10'>
              <FormSignUp />
            </div>
          </div>
        </div>
      </section>
    </Theme>
  )
}

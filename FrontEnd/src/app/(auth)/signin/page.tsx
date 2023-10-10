"use client"
import { Theme } from "@radix-ui/themes";
import FormSignIn from "@/components/Form/FormSignIn";
import ButtonSocialAuthen from "@/components/common/Button/ButtonSocialAuthen";

export default function Page() {


    return (
        <Theme className='flex h-screen'>
            <div className='w-1/2 relative top-0 bottom-0'>
                <h1 className='absolute w-2/3 text-[2.6em] max-w-[300px] font-bold top-10 left-10'>Smash sets in your sweats.</h1>
                <img
                    className='absolute object-cover top-0 bottom-0'
                    src='https://assets.quizlet.com/_next/static/media/QZ_Auth_LightV2.d6b0ba3d.png'
                    alt='avt'
                />
                <h2 className='absolute w-2/3 text-5xl text-white font-bold bottom-10 left-10'>Quizlet</h2>
            </div>
            <div className='w-1/2 information p-4 mx-10 my-10 grow'>
                {/* <div className='mb-8 text-2xl font-bold'>
                    <a href='/signup' className='mr-10 underline decoration-wavy decoration-violet-700 hover:border-b-0 underline-offset-8'>
                        Đăng kí
                    </a>
                    <a href='/signin' className='hover:border-b-0'>
                        Đăng nhập
                    </a>
                </div>
                <div className='flex flex-col w-full mb-8'>
                    <ButtonSocialAuthen />
                    <Button
                        onClick={() => Authentication.signGoogle(dataRespone)}
                        className='bg-transparent hover:bg-gray-400 text-blue-700 font-semibold hover:text-white py-5 px-4 border border-gray-500 hover:border-transparent rounded mb-4'
                        leftIcon={<GoogleIcon className='inline-block w-6 h-6 mr-2 mb-1' />}
                    >
                        <span className='font-medium text-black'>Tiếp tục với Google</span>
                    </Button>
                    <Button
                        onClick={() => Authentication.signFacebook(dataRespone)}
                        className='bg-transparent hover:bg-gray-400 text-blue-700 font-semibold hover:text-white py-5 px-4 border border-gray-500 hover:border-transparent rounded'
                        leftIcon={<FacebookIcon className='inline-block w-6 h-6 mr-2 mb-1' />}
                    >
                        <span className='font-medium text-black'>Tiếp tục với Facebook</span>
                    </Button>
                </div>
                <div className='inline-flex items-center justify-center w-full'>
                    <hr className='w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
                    <span className='absolute px-3 font-medium text-gray-700 -translate-x-1/5 bg-white dark:text-white dark:bg-gray-900'>
                        hoặc email
                    </span>
                </div>
                <FormSignIn /> */}
            </div>
        </Theme>
    )
}
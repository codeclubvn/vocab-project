'use client'
import { FacebookIcon, GoogleIcon } from '../Icons/Icons'
// import ButtonComponent from '../Button/Button'

import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import Input from '../Input/Input'
import Button from '../Button/Button'
const SignUp = () => {
  return (
    <Theme className='flex'>
      <div className='w-1/2 relative'>
        <h1 className='absolute w-2/4 text-5xl font-bold top-10 left-10'>
          Học hiệu quả mà thật thoải mái.
        </h1>
        <img
          className='object-cover w-full h-full'
          src='https://assets.quizlet.com/_next/static/media/QZ_Auth_LightV2.d6b0ba3d.png'
          alt='avt'
        />
        <h2 className='absolute w-2/3 text-5xl text-white font-bold bottom-10 left-10'>
          Vocab team
        </h2>
      </div>
      <div className='information p-4 mx-10 my-10 grow'>
        <div className='mb-8 text-2xl font-bold'>
          <a
            href='/sign-in'
            className='hover:border-b-0'
          >
            Đăng kí
          </a>
          <a
            href='/sign-up'
            className='ml-10 underline decoration-wavy decoration-violet-700 hover:border-b-0 underline-offset-8'
          >
            Đăng nhập
          </a>
        </div>
        <div className='flex flex-col w-full mb-2'>
          <Button
            className='bg-transparent hover:bg-gray-400 text-blue-700 font-semibold hover:text-white py-5 px-4 border border-gray-500 hover:border-transparent rounded mb-4'
            leftIcon={<GoogleIcon className='inline-block w-6 h-6 mr-2 mb-1' />}
          >
            <span className='font-medium text-black'>Tiếp tục với Google</span>
          </Button>
          <Button
            className='bg-transparent hover:bg-gray-400 text-blue-700 font-semibold hover:text-white py-5 px-4 border border-gray-500 hover:border-transparent rounded mb-4'
            leftIcon={<FacebookIcon className='inline-block w-6 h-6 mr-2 mb-1' />}
          >
            <span className='font-medium text-black'>Tiếp tục với Facebook</span>
          </Button>
        </div>
        <div className='inline-flex items-center justify-center w-full'>
          <hr className='w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
          <span className='absolute px-3 font-medium text-gray-700 -translate-x-1/5 bg-white dark:text-white dark:bg-gray-900'>
            HOẶC EMAIL
          </span>
        </div>
        <form className='relative'>
          <Input
            isDown={true}
            classNameLabel='text-sm'
            title='EMAIL'
            className='bg-transparent p-4 pl-0 pb-2 text-lg placeholder:text-lg rounded-none border-0 border-b-3 border-b-black transition-colors focus:outline-none focus:border-b-yellow-500 '
            placeholder='Nhập tên hoặc tên người dùng của bạn'
            type='text'
          />
          <Input
            isDown={true}
            classNameLabel='text-sm'
            title='MẬT KHẨU' 
            className='bg-transparent p-4 pl-0 pb-2 text-lg placeholder:text-lg rounded-none border-0 border-b-3 border-b-black transition-colors focus:outline-none focus:border-b-yellow-500 '
            placeholder='Nhập mật khẩu'
            type='password'
          />

          <a className='float-right -mt-8 hover:border-b-0 text-teal-400 font-bold' href="">Bạn quên rồi à ?</a>

          <div className='my-10 text-center'>
            <span>
              Bằng cách nhấp Đăng nhập, bạn chấp nhận <span className='font-bold'>Điều khoản dịch vụ</span> Và <span className='font-bold'>Chính sách quyền riêng </span> 
              tư của Quizlet
            </span>
          </div>

          <div className='flex flex-col w-full mb-8'>
            <Button className='bg-teal-400 text-lg font-bold text-white p-5 border border-#d9dde8-500 rounded'>
              Đăng nhập
            </Button>
            <span className='mb-2'>Hãy nhớ đăng xuất trên thiết bị dùng chung</span>
          </div>
          
          <div className='text-center border-3 py-2.5 font-bold'>
            Mới sử dụng Vocab?<span><a className='hover:border-b-0 text-teal-400 ' href="/sign-in"> Tạo tài khoản</a></span>
          </div>
        </form>
      </div>
    </Theme>
  )
}

export default SignUp

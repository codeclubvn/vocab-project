'use client'
import { AppleIcon, FacebookIcon, GoogleIcon } from '../common/Icons/Icons'
import SelectComponent from '../common/Select/Select'
// import ButtonComponent from '../Button/Button'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import Input from '../common/Input/Input'
import Button from '../common/Button/Button'
import { useCookie } from '@/utils/hooks'

const SignUp = () => {

  useCookie




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
        <h1 className='absolute w-2/3 text-5xl text-white font-bold bottom-10 left-10'>
          Vocab team
        </h1>
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
        <div className='flex flex-col w-full mb-8'>
          <Button className='bg-transparent hover:bg-gray-400 text-blue-700 font-semibold hover:text-white py-5 px-4 border border-gray-500 hover:border-transparent rounded mb-4'>
            <GoogleIcon className='inline-block w-6 h-6 mr-2' />
            <span className='font-medium text-black'>Tiếp tục với Google</span>
          </Button>
          <Button className='bg-transparent hover:bg-gray-400 text-blue-700 font-semibold hover:text-white py-5 px-4 border border-gray-500 hover:border-transparent rounded mb-4'>
            <FacebookIcon className='inline-block w-6 h-6 mr-2' />
            <span className='font-medium text-black'>Tiếp tục với Facebook</span>
          </Button>
          <Button className='bg-transparent hover:bg-gray-400 text-blue-700 font-semibold hover:text-white py-5 px-4 border border-gray-500 hover:border-transparent rounded'>
            <AppleIcon className='inline-block w-6 h-6 mr-2' />
            <span className='font-medium text-black'>Tiếp tục với Apple</span>
          </Button>
        </div>
        <div className='inline-flex items-center justify-center w-full'>
          <hr className='w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
          <span className='absolute px-3 font-medium text-gray-700 -translate-x-1/5 bg-white dark:text-white dark:bg-gray-900'>
            hoặc email
          </span>
        </div>
        <form className=''>
          <div className='block'>
            <label
              className='block text-sm font-medium text-gray-900 dark:text-white mb-2'
              htmlFor='date-of-birth'
            >
              Ngày sinh
            </label>
            <div className='flex gap-10'>
              <SelectComponent
                size={'3'}
                className='text-sm'
                color={'gray'}
                variant={'soft'}
                title={'Ngày'}
                side={'top'}
                value={[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
                ]}
              />
              <SelectComponent
                size={'3'}
                className='w-[120px]'
                color={'gray'}
                variant={'soft'}
                title={'Tháng'}
                side={'bottom'}
                value={[
                  'Tháng 1',
                  'Tháng 2',
                  'Tháng 3',
                  'Tháng 4',
                  'Tháng 5',
                  'Tháng 6',
                  'Tháng 7',
                  'Tháng 8',
                  'Tháng 9',
                  'Tháng 10',
                  'Tháng 11',
                  'Tháng 12',
                ]}
              />
              <SelectComponent
                size={'3'}
                className='w-[95px]'
                color={'gray'}
                variant={'soft'}
                title={'Năm'}
                side={'top'}
                value={[
                  2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
                  2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998,
                ]}
              />
            </div>
          </div>
          <Input
            title='Email'
            className=''
            placeholder='user@gmail.com'
            type='text'
          />
          <Input
            title='Tên người dùng'
            className=''
            placeholder='adrew123'
            type='text'
          />
          <Input
            title='Mật khẩu'
            className=''
            placeholder='......'
            type='password'
          />
          <div className='my-10 flex items-center'>
            <input
              className='mr-4 w-5 h-5 text-center text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500'
              type='checkbox'
            />
            <span>Tôi chấp nhận điều khoản dịch vụ và Chính sách quyền riêng tư của vQuizlet</span>
          </div>

          <div className='flex flex-col w-full mb-8'>
            <Button
              className='bg-transparent hover:bg-blue-600 font-medium text-black-700  hover:text-white py-2 px-4 border border-#d9dde8-500  hover:border-transparent rounded mb-4'
              disabled
            >
              Đăng ký
            </Button>
            <Button className='bg-transparent hover:bg-gray-400 font-medium text-black-700  hover:text-white py-2 px-4 border border-#d9dde8-500  hover:border-transparent rounded mb-4'>
              Bạn đã có tài khoản rồi? Đăng nhập
            </Button>
          </div>
        </form>
      </div>
    </Theme>
  )
}

export default SignUp

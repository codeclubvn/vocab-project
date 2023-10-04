'use client'
import { FacebookIcon, GoogleIcon } from '../common/Icons/Icons'
import SelectComponent from '../common/Select/Select'
// import ButtonComponent from '../Button/Button'

import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import Input from '../common/Input/Input'
import Button from '../common/Button/Button'
const SignIn = () => {

  const range = (from : number, to : number, isAsc : boolean) => {
    let res: Array<number> = []
    if (isAsc){
      for (let i = from; i <= to; i++){
        res.push(i)
      }
    }
    else {
      for (let i = to; i >= from; i--){
        res.push(i)
      }
    }
    return res
  }

  

  return (
    <Theme className='flex'>
      <div className='w-1/2 relative'>
        <h1 className='absolute w-2/3 text-5xl font-bold top-10 left-10'>
          Tham gia một cộng đồng sôi nổi với hơn 300 triệu người học trên toàn thế giới.
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
            href='/signup'
            className='mr-10 underline decoration-wavy decoration-violet-700 hover:border-b-0 underline-offset-8'
          >
            Đăng kí
          </a>
          <a
            href='/signin'
            className='hover:border-b-0'
          >
            Đăng nhập
          </a>
        </div>
        <div className='flex flex-col w-full mb-8'>
          <Button
            className='bg-transparent hover:bg-gray-400 text-blue-700 font-semibold hover:text-white py-5 px-4 border border-gray-500 hover:border-transparent rounded mb-4'
            leftIcon={<GoogleIcon className='inline-block w-6 h-6 mr-2 mb-1' />}
          >
            <span className='font-medium text-black'>Tiếp tục với Google</span>
          </Button>
          <Button
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
                value={range(1, 20, true)}
              />
              <SelectComponent
                size={'3'}
                className='w-[120px]'
                color={'gray'}
                variant={'soft'}
                title={'Tháng'}
                side={'bottom'}
                value={range(1, 12, true).map(ele => 'Tháng ' + ele.toString())}
              />
              <SelectComponent
                size={'3'}
                className='w-[95px]'
                color={'gray'}
                variant={'soft'}
                title={'Năm'}
                side={'top'}
                value={range(1998, 2023, false)}
              />
            </div>
          </div>
          <Input
            classNameLabel='text-sm'
            title='Email'
            className='p-3 pl-4 text-base placeholder:text-base border-gray-300 dark:focus:border-blue-500 dark:border-gray-600 focus:border-blue-500 dark:focus:ring-blue-500 focus:ring-blue-500 '
            placeholder='user@gmail.com'
            type='text'
          />
          <Input
            classNameLabel='text-sm'
            title='Tên người dùng'
            className='p-3 pl-4 text-base placeholder:text-base border-gray-300 dark:focus:border-blue-500 dark:border-gray-600 focus:border-blue-500 dark:focus:ring-blue-500 focus:ring-blue-500'
            placeholder='adrew123'
            type='text'
          />
          <Input
            classNameLabel='text-sm'
            title='Mật khẩu'
            className='p-3 pl-4 text-base placeholder:text-base border-gray-300 dark:focus:border-blue-500 dark:border-gray-600 focus:border-blue-500 dark:focus:ring-blue-500 focus:ring-blue-500'
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
              className='font-medium text-black-700 hover:text-white py-2 px-4 border border-#d9dde8-500 hover:bg-blue-600  hover:border-transparent rounded mb-4'
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

export default SignIn

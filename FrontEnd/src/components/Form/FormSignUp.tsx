import { Button } from '@radix-ui/themes'
import React from 'react'
import { Input } from '../common/Input'
import SelectComponent from '../common/Select/Select'

type Props = {
  
}

function FormSignUp({ }: Props) {

  const range = (from: number, to: number, isAsc: boolean) => {
    let res: Array<number> = []
    if (isAsc) {
      for (let i = from; i <= to; i++) {
        res.push(i)
      }
    } else {
      for (let i = to; i >= from; i--) {
        res.push(i)
      }
    }
    return res
  }


  return (
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
            value={range(1, 12, true).map((ele) => 'Tháng ' + ele.toString())}
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
  )
}

export default FormSignUp
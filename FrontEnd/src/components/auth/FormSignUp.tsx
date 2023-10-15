import { Button } from '@radix-ui/themes'
import React from 'react'
import { generateNumberRange } from '@/helpers/generateNumberRange'
import Link from 'next/link'
import { InputSignUp } from '../common/Input'
import SelectComponent from '../common/Select/Select'

interface FormProps extends React.ComponentPropsWithoutRef<'form'> {
  className?: string
}

function FormSignUp(props: FormProps) {
  return (
    <form>
      <div className='block'>
        <label
          className='block text-sm font-medium dark:text-white mb-2 text-[#586380]'
          htmlFor='date-of-birth'
        >
          Ngày sinh
        </label>
        <div className='flex gap-5 flex-wrap md:flex-nowrap'>
          <SelectComponent
            defaultValue='1'
            size='3'
            color='gray'
            className='text-sm border-solid border-[#586380] border-8 w-[100px]'
            title='Ngày'
            side='top'
            listValue={generateNumberRange(1, 31, true).map((ele) => ele.toString())}
          />
          <SelectComponent
            size='3'
            className='text-sm border-solid border-[#586380] border-8 w-[120px]'
            title='Tháng'
            side='bottom'
            listValue={generateNumberRange(1, 12, true).map((ele) => `Tháng ${ele.toString()}`)}
          />
          <SelectComponent
            defaultValue='2023'
            size='3'
            className='text-sm border-solid border-[#586380] border-8 w-[120px]'
            title='Năm'
            side='top'
            listValue={generateNumberRange(2023, 1970, false).map((ele) => ele.toString())}
          />
        </div>
      </div>
      <InputSignUp
        classNameLabel='text-sm'
        title='Email'
        className='p-3 pl-4 text-base placeholder:text-base border-gray-30 border-solid border-[#586380] border-2 w-full'
        placeholder='user@gmail.com'
        type='text'
      />
      <InputSignUp
        classNameLabel='text-sm'
        title='Tên người dùng'
        className='p-3 pl-4 text-base placeholder:text-base border-solid border-[#586380] border-2 w-full'
        placeholder='adrew123'
        type='text'
      />
      <InputSignUp
        classNameLabel='text-sm'
        title='Mật khẩu'
        className='p-3 pl-4 text-base placeholder:text-baseborder-solid border-[#586380] border-2 w-full'
        placeholder='......'
        type='password'
      />
      <div className='my-10 flex items-center'>
        <InputSignUp
          className='mr-4 w-5 h-5 text-center text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500'
          type='checkbox'
        />
        <span className='ml-4'>
          Tôi chấp nhận điều khoản dịch vụ và Chính sách quyền riêng tư của Quizlet
        </span>
      </div>
      <div className='flex flex-col w-full my-8'>
        <Button
          variant='solid'
          size='2'
          radius='full'
          style={{
            padding: '2rem',
            backgroundColor: 'var(--select-color-0)',
          }}
        >
          <h2 className='text-lg lg:text-xl font-normal'>Đăng kí</h2>
        </Button>
      </div>
      <div className='text-center text-base lg:text-[1.2rem] py-2.5 font-bold text-[#929292]'>
        Đã có tài khoản ?
        <span>
          <Link
            className='pl-2 text-accent-0'
            href='/signin'
          >
            Đăng nhập
          </Link>
        </span>
      </div>
    </form>
  )
}

export default FormSignUp

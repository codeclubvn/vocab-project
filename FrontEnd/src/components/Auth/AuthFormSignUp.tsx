import React from 'react'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { generateNumberRange } from '@/utils/generateNumberRange'
import SelectComponent from '../UI/Select'
import Button from '../UI/Button'

function AuthFormSignUp() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Trường này phải là Email').required(),
      password: Yup.string().required('Mật khẩu không được đê trống'),
    }),
    onSubmit(value) {
      console.log(value)
    },
  })

  return (
    <form>
      <div className='block'>
        <p className='block mb-2 font-medium text-gray-900'>NGÀY SINH</p>
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
      <label
        htmlFor='email'
        className={`block my-2 font-medium text-gray-900  `}
      >
        EMAIL
        <input
          id='email'
          type='email'
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          className='w-full px-6 py-4 border-2 border-gray  text-black  hover:bg-transparent hover:border-gray focus:outline-none focus:ring-2 focus:ring-gray focus:border-transparent font-medium rounded-sm text-sm'
          placeholder='Vui lòng nhập trường này'
        />
      </label>

      <p className='text-red-500 text-sm hidden'>{formik.errors.email || ''}</p>
      <label
        htmlFor='password'
        className={`block my-2 font-medium text-gray-900  `}
      >
        PASSWORD
        <input
          id='password'
          type='password'
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          className='w-full px-6 py-4 border-2 border-gray text-black hover:bg-transparent hover:border-gray focus:outline-none focus:ring-2 focus:ring-gray focus:border-transparent font-medium rounded-sm text-sm'
          placeholder='Vui lòng nhập trường này'
        />
        <p className='text-red-500 text-sm hidden'>{formik.errors.password || ''}</p>
      </label>

      <div className='my-10 flex items-center'>
        <input
          key={1}
          className='mr-4 w-5 h-5 text-center text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500'
          type='checkbox'
        />
        <span className='ml-4'>
          Tôi chấp nhận điều khoản dịch vụ và Chính sách quyền riêng tư của Quizlet
        </span>
      </div>
      <div className='flex flex-col w-full my-8'>
        <Button variant='solidAccent'>
          <h2 className='text-lg lg:text-xl font-normal'>Đăng ký</h2>
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

export default AuthFormSignUp

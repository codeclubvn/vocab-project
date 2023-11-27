'use client'

import Link from 'next/link'
import React, { FC } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../UI/Button'

interface FormProps {
  className?: string
}

const AuthFormSignIn: FC<FormProps> = ({ className = '' }) => {
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
    <form
      onSubmit={formik.handleSubmit}
      className={className}
    >
      <label
        htmlFor='email'
        className={`block my-2 font-medium text-gray-900 dark:text-white `}
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
        className={`block my-2 font-medium text-gray-900 dark:text-white `}
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
      {/* <Link
        className='float-right -mt-8 hover:border-b-0 text-accent-0 font-bold'
        href='/forgot-password'
      >
        Bạn quên rồi à ?
      </Link> */}
      <div className='flex flex-col w-full my-8'>
        <Button variant='solidAccent'>
          <h2 className='text-lg lg:text-xl font-normal'>Đăng nhập</h2>
        </Button>
      </div>
      <div className='text-center text-base lg:text-[1.2rem] py-2.5 font-bold text-[#929292]'>
        Dont have an account?
        <span>
          <Link
            className='pl-2 text-accent-0'
            href='/signup'
            prefetch={false}
          >
            Tạo tài khoản
          </Link>
        </span>
      </div>
    </form>
  )
}

export default AuthFormSignIn

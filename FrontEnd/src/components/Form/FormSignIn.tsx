'use client'
import { Button } from '@radix-ui/themes'
import { InputSignIn } from '../common/Input'
import Link from 'next/link'

import React, { FC } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { cn } from 'react-swisskit'
import './form.css'
interface FormSignInProps {
  className?: string
}
const FormSignIn: FC<FormSignInProps> = ({ className = '' }) => {
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
      <InputSignIn
        isDown={true}
        classNameLabel='text-sm'
        value={formik.values.email}
        handleChange={formik.handleChange}
        title='EMAIL'
        className={cn('bg-transparent form__input')}
        placeholder='mail@abc.com'
        type='text'
        required
        error={formik.errors.email}
      />

      <InputSignIn
        isDown={true}
        value={formik.values.password}
        handleChange={formik.handleChange}
        required
        classNameLabel='text-sm'
        title='MẬT KHẨU'
        className={cn('bg-transparent form__input')}
        placeholder='*******'
        type='password'
        error={formik.errors.password}
      />
      <Link
        className='float-right -mt-8 hover:border-b-0 text-accent-0 font-bold'
        href='/forgot-password'
      >
        Bạn quên rồi à ?
      </Link>
      <div className='flex flex-col w-full my-8'>
        <Button
          variant='solid'
          size={'2'}
          radius={`full`}
          type='submit'
          style={{
            padding: '2rem',
            backgroundColor: 'var(--select-color-0)',
          }}
        >
          <h2 className='text-lg lg:text-xl font-normal'>Đăng nhập</h2>
        </Button>
      </div>
      <div className='text-center text-base lg:text-[1.2rem] py-2.5 font-bold text-[#929292]'>
        Don't have an account?
        <span>
          <Link
            className='pl-2 text-accent-0'
            href='/signup'
          >
            Tạo tài khoản
          </Link>
        </span>
      </div>
    </form>
  )
}

export default FormSignIn

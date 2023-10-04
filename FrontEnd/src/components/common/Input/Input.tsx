'use client'

import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classNameLabel?: string,
  isDown? : boolean
}

const Input = ({ type = 'text', isDown=false, className, classNameLabel = '', placeholder, title, ...props }: InputProps) => {
  return (
    <div>
      {isDown ? '' : <label
        htmlFor='default-input'
        className={`block my-2 font-medium text-gray-900 dark:text-white ${classNameLabel}`}
      >
        {title}
      </label>}
      <input
        type={type}
        id='default-input'
        className={
          `bg-gray-50 text-gray-900 rounded-lg  w-full dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white  placeholder-black-500 placeholder-opacity-100 ${className}`
        }
        placeholder={placeholder}
        {...props}
      />
      {isDown ? <label
        htmlFor='default-input'
        className={`block my-2 font-medium text-gray-900 dark:text-white ${classNameLabel}`}
      >
        {title}
      </label> : ''}
    </div>
  )
}

export default Input

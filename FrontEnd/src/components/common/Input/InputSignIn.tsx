'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  type?: string
  isDown?: boolean
  className?: string
  classNameLabel?: string
  placeholder?: string
  title?: string
  value?: string
  handleChange?(e: React.ChangeEvent<any>)
  error?: string
}

const InputSignIn: FC<InputProps> = ({
  type = 'text',
  isDown = false,
  className = '',
  classNameLabel = '',
  placeholder = 'Vui lòng nhập trường này',
  title = '',
  value,
  handleChange,
  error,
}) => {
  return (
    <div>
      {isDown ? (
        ''
      ) : (
        <label
          htmlFor={`default-input-${title}`}
          className={`block my-2 font-medium text-gray-900 dark:text-white ${classNameLabel}`}
        >
          {title}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={handleChange}
        id={`default-input-${title}`}
        className={`${className} bg-gray-50 rounded-lg w-full dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white placeholder-black-500 placeholder-opacity-100 text-[#1a1d28]`}
        placeholder={placeholder}
      />
      <p className='text-red-500 text-sm hidden'>{error || ''}</p>
      {isDown ? (
        <label
          htmlFor={`default-input-${title}`}
          className={`block my-2 font-medium text-gray-900 dark:text-white ${classNameLabel}`}
        >
          {title}
        </label>
      ) : (
        ''
      )}
    </div>
  )
}

export default InputSignIn

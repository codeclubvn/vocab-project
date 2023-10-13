'use client'

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  type?: string,
  isDown?: boolean,
  className?: string,
  classNameLabel?: string,
  placeholder?: string,
  title?: string,
}

const InputSignIn = ({
  type = 'text',
  isDown = false,
  className = '',
  classNameLabel = '',
  placeholder = '',
  title = '',
}: InputProps) => {
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
        className={`${className} bg-gray-50 rounded-lg w-full dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white placeholder-black-500 placeholder-opacity-100 text-[#1a1d28]`}
        placeholder={placeholder}
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

export default InputSignIn

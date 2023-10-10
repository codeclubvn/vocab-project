'use client'

interface Props {
  type?: string,
  isDown?: boolean,
  className?: string,
  classNameLabel?: string,
  placeholder?: string,
  title?: string,
}

const InputSignUp = (props: Props) => {
  return (
    <div>
      {props.isDown ? '' : <label
        htmlFor='default-input'
        className={`block my-2 font-medium text-[#606a86] dark:text-white ${props.classNameLabel}`}
      >
        {props.title}
      </label>}
      <input
        type={props.type}
        id='default-input'
        className={`${props.className} bg-gray-50 rounded-lg w-full dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white placeholder-black-500 placeholder-opacity-100 text-[#1a1d28] font-medium`}
        placeholder={props.placeholder}
      />
      {props.isDown ? <label
        htmlFor='default-input'
        className={`block my-2 font-medium text-[#606a86] ${props.classNameLabel}`}
      >
        {props.title}
      </label> : ''}
    </div>
  )
}

InputSignUp.defaultProps = {
  type: 'text',
  isDown: false,
  className: '',
  classNameLabel: '',
  placeholder: '',
  title: '',
}

export default InputSignUp

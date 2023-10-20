'use client'

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  type?: string
  className?: string
  classNameInput?: string
  classNameLabel?: string
  placeholder?: string
  title?: string
}

const InputCreateCollection = ({
  id = 'default-input',
  type = 'text',
  className = '',
  classNameInput = '',
  classNameLabel = '',
  placeholder = '',
  title = '',
}: InputProps) => {
  return (
    <div className={`${className}`}>
      <input
        id={id}
        type={type}
        className={`${classNameInput} transition rounded-none bg-transparent p-4 pl-0 pb-2 text-lg placeholder:text-lg  border-0 border-b-3 border-b-black duration-500 focus:outline-none focus:border-b-[#23a8f2] bg-gray-50 w-full placeholder-black-500 placeholder-opacity-100 text-[#1a1d28]`}
        placeholder={placeholder}
      />
      <label
        htmlFor={id}
        className={`uppercase block my-2 font-medium text-gray-900 cursor-pointer ${classNameLabel}`}
      >
        {title}
      </label>
    </div>
  )
}

export default InputCreateCollection

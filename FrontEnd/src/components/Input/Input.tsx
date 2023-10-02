type InputProps = {
  title: string
  className: string,
  placeholder: string,
  type: string
}

const Input = ({type = 'text', ...props}: InputProps) => {
  return (
    <div>
      <label
        htmlFor='default-input'
        className={'block my-2 text-sm font-medium text-gray-900 dark:text-white' + props.className}
      >
        {props.title}
      </label>
      <input
        type={type}
        id='default-input'
        className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-black-500 placeholder-opacity-100' + props.className}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default Input

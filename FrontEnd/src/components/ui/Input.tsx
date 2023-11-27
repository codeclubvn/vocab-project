import { cn } from 'react-swisskit'

const sizesLookup = {
  base: /*tw:*/ `px-3 py-1.5`,
  medium: /*tw:*/ `px-5 py-2.5`,
  large: /*tw:*/ `px-6 py-4`,
}

const varianStyle = {
  outline: ` border-2 border-black text-black  hover:bg-transparent hover:border-gray focus:outline-none focus:ring-2 focus:ring-gray focus:border-transparent font-medium rounded-sm text-sm`,
  noneborder: `transition rounded-none bg-transparent !pl-0 pb-2 text-lg placeholder:text-lg  border-0 border-b-3 border-b-black duration-500 focus:outline-none focus:border-b-accent w-full placeholder-black-500 placeholder-opacity-100 text-[#1a1d28]`,
}

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  variant?: 'outline' | 'noneborder' | ''
  inputSize?: 'base' | 'medium' | 'large' | ''
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ variant, inputSize, onChange, className, ...props }: InputProps) => {
  const baseClasses = `transition-all duration-300 ease-in-out`

  const classes = cn([
    baseClasses,
    varianStyle[variant || 'outline'],
    sizesLookup[inputSize || 'medium'],
    className,
  ])
  return (
    <input
      {...props}
      onChange={onChange}
      className={classes}
    />
  )
}

export default Input

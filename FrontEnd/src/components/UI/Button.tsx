import React, { forwardRef } from 'react'
import { cn } from 'react-swisskit'
import { Slot } from '@radix-ui/react-slot'

const sizesLookup = {
  base: /*tw:*/ `px-3 py-1.5`,
  medium: /*tw:*/ `px-5 py-2.5`,
  large: /*tw:*/ `px-6 py-3`,
}

const varianStyle = {
  solidBlack: `border-2 border-black bg-black text-white hover:bg-transparent hover:text-black hover:border-gray focus:outline-none focus:ring-2 focus:ring-gray focus:border-transparent font-medium rounded-sm text-sm`,
  outlineBlack: `border-2 border-black bg-transparent text-black hover:bg-black hover:text-white hover:border-gray
  focus:outline-none focus:ring-2 focus:ring-gray focus:border-transparent
  font-medium rounded-sm text-sm`,
  solidAccent: `border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-black hover:border-gray focus:outline-none focus:ring-2 focus:ring-gray focus:border-transparent font-medium rounded-sm text-sm`,
  outlineAccent: `border-2 border-accent bg-transparent text-black hover:bg-accent hover:text-white hover:border-accent
  focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
  font-medium rounded-sm text-sm`,
}

type ButtonProps = {
  children: React.ReactNode
  variant?: 'solidBlack' | 'outlineBlack' | 'solidAccent'
  size?: 'base' | 'medium' | 'large' | ''
  href?: string
  className?: string
  asChild?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, variant, size, asChild, className, ...rest } = props

  const baseClasses = `transition-all duration-300 ease-in-out`

  const classes = cn([
    baseClasses,
    varianStyle[variant || 'solidBlack'],
    sizesLookup[size || 'medium'],
    className,
  ])
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      {...rest}
      className={classes}
      ref={ref}
    >
      {children}
    </Comp>
  )
})

Button.displayName = 'Button'
export default Button

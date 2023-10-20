import Link from 'next/link'
import { ReactNode } from 'react'
// import { ReactComponentElement } from 'react'

interface LinkCardProps extends React.ComponentPropsWithRef<'link'> {
  children: ReactNode
  href: string
  className?: string
}

const LinkCard = ({ children, href, className }: LinkCardProps) => {
  return (
    <Link
      href={href}
      className={`w-120 h-[52px] rounded-md shadow-xl bg-[#ffffff] mr-4 ${className}`}
    >
      {children}
    </Link>
  )
}
export default LinkCard

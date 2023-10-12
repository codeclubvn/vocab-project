"use client"
import { useRouter } from "next/navigation"

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode,
  className?: string,
  classNameTitle?: string,
  route?: string
}

const ButtonCallToAction = (props: ButtonProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (props.route) {
      router.push(props.route)
    }
  }

  return (
    <button onClick={handleClick} className={`flex items-center justify-center rounded-full px-4 py-[0.75rem] pointer ${props.className}`}>
      <h5 className={`text-white uppercase text-[0.6rem] md:text-[12px] whitespace-nowrap ${props.classNameTitle}`}>
        {props.children}
      </h5>
    </button>
  )
}

export default ButtonCallToAction
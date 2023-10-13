interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string,
  description?: string,
  onClick?: () => void,
}

function ButtonCreateCollection({
  className,
  description,
  onClick,
}: ButtonProps) {

  return (
    <button
      onClick={onClick}
      className={`${className} font-bold py-2 px-4 rounded-lg `}
    >
      {description}
    </button>
  )
}

export default ButtonCreateCollection
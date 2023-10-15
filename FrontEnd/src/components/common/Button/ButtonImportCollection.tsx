interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  className?: string
  description?: string
  onClick?: () => void
}

function ButtonImportCollection({ className, description, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} font-semibold p-1 px-4 rounded-lg border-[#586380] border-2 flex  items-center `}
    >
      <img
        src='/assets/icons/plus.svg'
        width={25}
        height={25}
        alt='Add one more card'
        className='mr-2 h-[25px] w-[25px]'
      />
      <span>{description}</span>
    </button>
  )
}

export default ButtonImportCollection

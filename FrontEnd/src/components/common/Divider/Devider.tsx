interface DividerProps extends React.ComponentPropsWithoutRef<"div"> {
    className?: string, 
    disabled?: boolean, 
  }
  
  export default function Divider(props: DividerProps) {
    const newClassName = props.disabled ? props.className + ' cursor-not-allowed text-white bg-gray-300 border-none hover:bg-gray-300' : props.className
  
    return (
        <div className={`${newClassName}`}> 
        </div>
    )
  }
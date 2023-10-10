import Button from "./Button";

type Props = {
  icon: any , 
  description?: string,
  onClick?: () => void,
}

function ButtonSocialAuthen(props: Props) {

  return (
    <Button
      onClick={props.onClick}
      className='font-semibold border-gray-500 hover:bg-[#edeff4] hover:text-white py-[1rem] px-4 border rounded mb-4'
      leftIcon={props.icon}
    >
      <span className='font-medium text-[#5c6683]'>{props.description}</span>
    </Button>
  )
}

export default ButtonSocialAuthen
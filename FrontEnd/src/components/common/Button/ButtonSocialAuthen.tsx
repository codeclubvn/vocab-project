import Authentication from "@/services/authen"
import { userApi } from "@/services/user";
import { GoogleIcon } from "../Icons/GoogleIcon";
import Button from "./Button";

type Props = {}

function ButtonSocialAuthen({ }: Props) {

  const dataRespone = (response: any) => {
    console.log(response)
    userApi.addFireBase(response.user);
}

  return (
    <Button
      onClick={() => Authentication.signGoogle(dataRespone)}
      className='bg-transparent hover:bg-gray-400 text-blue-700 font-semibold hover:text-white py-5 px-4 border border-gray-500 hover:border-transparent rounded mb-4'
      leftIcon={<GoogleIcon className='inline-block w-6 h-6 mr-2 mb-1' />}
    >
      <span className='font-medium text-black'>Tiếp tục với Google</span>
    </Button>
  )
}

export default ButtonSocialAuthen
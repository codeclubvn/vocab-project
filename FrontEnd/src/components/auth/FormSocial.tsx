import Image from 'next/image'
import { userApi } from '@/services/user'
import Authentication from '@/services/authen'

const FormSocial = () => {
  const handleSignInWithFirebase = (response: any) => {
    userApi.addFireBase(response.user)
  }
  return (
    <>
      <button
        onClick={() => Authentication.signGoogle(handleSignInWithFirebase)}
        className='font-semibold border-gray-500 hover:bg-[#edeff4] hover:text-white py-[1rem] px-4 border rounded mb-4'
      >
        <span className='font-medium text-[#5c6683]'>
          <Image
            src='/assets/icons/google.svg'
            alt='Login with google'
            width={6}
            height={6}
            className='inline-block w-6 h-6 mr-2 mb-1'
          />{' '}
          Đăng nhập với Google
        </span>
      </button>
      <button
        onClick={() => Authentication.signFacebook(handleSignInWithFirebase)}
        className='font-semibold border-gray-500 hover:bg-[#edeff4] hover:text-white py-[1rem] px-4 border rounded mb-4'
      >
        <span className='font-medium text-[#5c6683]'>
          <Image
            src='/assets/icons/facebook.svg'
            alt='Login with google'
            width={6}
            height={6}
            className='inline-block w-6 h-6 mr-2 mb-1'
          />{' '}
          Đăng nhập với Facebook
        </span>
      </button>
    </>
  )
}

export default FormSocial

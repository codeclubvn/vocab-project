"use client"
import { GoogleIcon, FacebookIcon } from '@/components/common/Icons';
import { setToken } from '@/helpers/handleCookie';
import { User } from '@/types';
import { Theme, Button } from '@radix-ui/themes';
import { useRouter } from 'next/navigation'


export default function Page() {
  const router = useRouter()

  const handleRegister = async (event) => {
    event.preventDefault();

    const email = 'nhat03@gmail.com'; // replace with the user's email
    const password = 'user password here'; // replace with the user's password

    const data = {
      email,
      password
    }

    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const res = await response.json();
    const result: User = res.data;
    console.log(result);

    alert("Login thanh cong ");
    setToken(result.access_token);

    router.push('/about', { scroll: false })
    // handle the response data
  };



  return (<Theme className='flex'>
    <div className='w-1/2 relative'>
      <h1 className='absolute w-2/4 text-5xl font-bold top-10 left-10'>
        Học hiệu quả mà thật thoải mái.
      </h1>
      <img
        className='object-cover w-full h-full'
        src='https://assets.quizlet.com/_next/static/media/QZ_Auth_LightV2.d6b0ba3d.png'
        alt='avt'
      />
      <h2 className='absolute w-2/3 text-5xl text-white font-bold bottom-10 left-10'>
        Vocab team
      </h2>
    </div>
    <div className='information p-4 mx-10 my-10 grow'>
      <div className='mb-8 text-2xl font-bold'>
        <a
          href='/signup'
          className='hover:border-b-0'
        >
          Đăng kí
        </a>
        <a
          href='/signin'
          className='ml-10 underline decoration-wavy decoration-violet-700 hover:border-b-0 underline-offset-8'
        >
          Đăng nhập
        </a>
      </div>
      <div className='flex flex-col w-full mb-2'>
        <Button
          className='bg-transparent hover:bg-gray-400 text-blue-700 font-semibold hover:text-white py-5 px-4 border border-gray-500 hover:border-transparent rounded mb-4'
          leftIcon={<GoogleIcon className='inline-block w-6 h-6 mr-2 mb-1' />}
        >
          <span className='font-medium text-black'>Tiếp tục với Google</span>
        </Button>
        <Button
          className='bg-transparent hover:bg-gray-400 text-blue-700 font-semibold hover:text-white py-5 px-4 border border-gray-500 hover:border-transparent rounded mb-4'
          leftIcon={<FacebookIcon className='inline-block w-6 h-6 mr-2 mb-1' />}
        >
          <span className='font-medium text-black'>Tiếp tục với Facebook</span>
        </Button>
      </div>
      <div className='inline-flex items-center justify-center w-full'>
        <hr className='w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
        <span className='absolute px-3 font-medium text-gray-700 -translate-x-1/5 bg-white dark:text-white dark:bg-gray-900'>
          HOẶC EMAIL
        </span>
      </div>

    </div>
  </Theme>
  )

}
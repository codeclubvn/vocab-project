"use client"
import { setToken } from '@/helpers/handleCookie';
import { User } from '@/types';
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



  return <>
    <button onClick={handleRegister}  >Test Login</button>
  </>
}
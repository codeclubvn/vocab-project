import { Button } from '@radix-ui/themes'
import { InputSignIn } from '../common/Input'
import Link from 'next/link'
interface FormProps extends React.ComponentPropsWithoutRef<"form"> {
  className?: string
}

function FormSignIn(props: FormProps) {

  return (
    <form className={` ${props.className}`}>
      <InputSignIn
        isDown={true}
        classNameLabel='text-sm'
        title='EMAIL'
        className='bg-transparent p-4 pl-0 pb-2 text-lg placeholder:text-lg rounded-none border-0 border-b-3 border-b-black transition-colors focus:outline-none focus:border-b-yellow-500 '
        placeholder='mail@abc.com'
        type='text'
      />
      <InputSignIn
        isDown={true}
        classNameLabel='text-sm'
        title='MẬT KHẨU'
        className='bg-transparent p-4 pl-0 pb-2 text-lg placeholder:text-lg rounded-none border-0 border-b-3 border-b-black transition-colors focus:outline-none focus:border-b-yellow-500 '
        placeholder='*******'
        type='password'
      />
      <Link className='float-right -mt-8 hover:border-b-0 text-accent-0 font-bold' href="/forgot-password">Bạn quên rồi à ?</Link>
      <div className='flex flex-col w-full my-8'>
        <Button variant="solid" size={"2"} radius={`full`} style={{
          padding: "2rem",
          backgroundColor: "var(--select-color-0)",
        }}>
          <h2 className='text-lg lg:text-xl font-normal'>Đăng nhập</h2>
        </Button>
      </div>
      <div className='text-center text-base lg:text-[1.2rem] py-2.5 font-bold text-[#929292]'>
        Don't have an account?
        <span>
          <Link className='pl-2 text-accent-0' href="/signup">Tạo tài khoản</Link>
        </span>
      </div>
    </form>
  )
}

export default FormSignIn
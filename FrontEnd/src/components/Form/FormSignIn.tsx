import { Button } from '@radix-ui/themes'
import { Input } from '../common/Input'

type Props = {}

function FormSignIn({ }: Props) {
  return (
    <form className='relative' >
      <Input
        isDown={true}
        classNameLabel='text-sm'
        title='EMAIL'
        className='bg-transparent p-4 pl-0 pb-2 text-lg placeholder:text-lg rounded-none border-0 border-b-3 border-b-black transition-colors focus:outline-none focus:border-b-yellow-500 '
        placeholder='Nhập tên hoặc tên người dùng của bạn'
        type='text'
      />
      <Input
        isDown={true}
        classNameLabel='text-sm'
        title='MẬT KHẨU'
        className='bg-transparent p-4 pl-0 pb-2 text-lg placeholder:text-lg rounded-none border-0 border-b-3 border-b-black transition-colors focus:outline-none focus:border-b-yellow-500 '
        placeholder='Nhập mật khẩu'
        type='password'
      />

      <a className='float-right -mt-8 hover:border-b-0 text-teal-400 font-bold' href="">Bạn quên rồi à ?</a>

      <div className='my-10 text-center'>
        <span>
          Bằng cách nhấp Đăng nhập, bạn chấp nhận <span className='font-bold'>Điều khoản dịch vụ</span> Và <span className='font-bold'>Chính sách quyền riêng </span>
          tư của Quizlet
        </span>
      </div>

      <div className='flex flex-col w-full mb-8'>
        <Button className='bg-teal-400 text-lg font-bold text-white p-5 border border-#d9dde8-500 rounded'>
          Đăng nhập
        </Button>
        <span className='mb-2'>Hãy nhớ đăng xuất trên thiết bị dùng chung</span>
      </div>

      <div className='text-center border-3 py-2.5 font-bold'>
        Mới sử dụng Vocab?<span><a className='hover:border-b-0 text-teal-400 ' href="/sign-in"> Tạo tài khoản</a></span>
      </div>
    </form>
  )
}

export default FormSignIn
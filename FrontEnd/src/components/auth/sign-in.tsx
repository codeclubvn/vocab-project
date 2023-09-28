const SignIn = () => {
  return (
    <>
      <div className='w-1/2'>
        <img
          className='object-cover w-full h-full'
          src='https://assets.quizlet.com/_next/static/media/QZ_Auth_LightV2.d6b0ba3d.png'
          alt='avt'
        />
      </div>
      <div className='information p-4 mx-10 my-10 grow'>
        <div className='mb-8'>
          <span className='mr-10'>Đăng kí</span>
          <span>Đăng nhập</span>
        </div>
        <div className='flex flex-col w-full mb-8'>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-4'>
            {/* <svg
                  aria-label='biểu tượng google nhiều màu'
                  className='AssemblyIcon AssemblyIcon--medium'
                  role='img'
                >
                  <noscript></noscript>
                  <use
                    href='#google-color'
                    xlinkHref='#google-color'
                  ></use>
                  <noscript></noscript>
                </svg> */}
            <span>Tiếp tục với Google</span>
          </button>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            Tiếp tục với Facebook
          </button>
        </div>
        <div className='inline-flex items-center justify-center w-full'>
          <hr className='w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
          <span className='absolute px-3 font-medium text-gray-700 -translate-x-1/5 bg-white dark:text-white dark:bg-gray-900'>
            hoặc email
          </span>
        </div>
        <form className=''>
          <div className='block'>
            <label htmlFor='date-of-birth'>Ngày sinh</label>
            <br />
            <select
              className='w-1/3 p-2 text-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              name='day'
              id='day'
            >
              <option value=''>Ngày</option>
            </select>
            <select
              className='w-1/3 p-2 text-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              name='month'
              id='day'
            >
              <option value=''>Tháng</option>
            </select>
            <select
              className='w-1/3 p-2 text-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              name='year'
              id='day'
            >
              <option value=''>Năm</option>
            </select>
          </div>
          <div className=''>
            <label
              htmlFor='default-input'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Email
            </label>
            <input
              type='text'
              id='default-input'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </div>
          <div className=''>
            <label
              htmlFor='default-input'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Tên người dùng
            </label>
            <input
              type='text'
              id='default-input'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </div>
          <div className=''>
            <label
              htmlFor='default-input'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Mật khẩu
            </label>
            <input
              type='password'
              id='default-input'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </div>
          <input type='checkbox' />
          <span>Tôi chấp nhận điều khoản dịch vụ và Chính sách quyền riêng tư của vQuizlet</span>

          <div className='flex flex-col w-full mb-8'>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-4'>
              Đăng ký
            </button>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-4'>
              Bạn đã có tài khoản rồi? Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignIn

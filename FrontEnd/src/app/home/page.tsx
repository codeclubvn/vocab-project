/* eslint-disable react/jsx-no-useless-fragment */
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { Theme, Heading, Text } from '@radix-ui/themes'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import '@radix-ui/themes/styles.css'
import { Button } from '@/components/common/Button'
import { Card, CardUser } from '@/components/common/Card'
import Divider from '@/components/common/Divider/Devider'

export default function Page() {
  return (
    <>
      <Theme>
        <Navbar />
        <div className='gap-navbar' />
        <div className='grid grid-cols-4 gap-[100px] mx-[80px] mt-[147px] w-100 max-lg:grid-cols-1 max-lg:mx-[20px] max-lg:gap-0'>
          <div className='col-span-3'>
            <div className=''>
              <div className='flex justify-between items-center'>
                <Heading>Khoá học của bạn</Heading>
                <div className='flex items-center gap-[10px]'>
                  <Button className=''>
                    <BsChevronLeft />
                  </Button>
                  <Text> 1/2 </Text>
                  <Button className=''>
                    <BsChevronRight />
                  </Button>
                </div>
              </div>

              <div className='mt-[27px]'>
                <Card
                  title='Course name'
                  className='mt-[20px]'
                  wordLearnt={150}
                  totalWords={1500}
                  headerClass='bg-[#f2f2f2] mb-2 p-2'
                />
                <Card
                  title='Course name'
                  className='mt-[20px]'
                  wordLearnt={150}
                  totalWords={1500}
                  headerClass='bg-[#f2f2f2] mb-2 p-2'
                />
                <Card
                  title='Course name'
                  className='mt-[20px]'
                  wordLearnt={150}
                  totalWords={1500}
                  headerClass='bg-[#f2f2f2] mb-2 p-2'
                />
              </div>
            </div>
            <Divider className='h-[3px] w-full bg-black mt-[33px] mb-[46px]' />
            <div className='suggest-course'>
              <div className='flex justify-between items-center'>
                <Heading>Đề xuất</Heading>
                <Button className='font-bold text-[16px]'>Xem thêm</Button>
              </div>
              <div className='mt-[29px] grid grid-cols-3 gap-[20px] max-md:grid-cols-2'>
                <Card
                  className='grid grid-cols-2 max-md:grid-cols-1'
                  title='Course name'
                  description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aspernatur voluptates consequuntur obcaecati, consectetur eveniet, recusandae in, optio suscipit reiciendis cum? Et, tempore accusamus nulla illo debitis neque delectus obcaecati.'
                  imageClass='w-full h-full max-md:h-[100px]'
                />
                <Card
                  className='grid grid-cols-2  max-md:grid-cols-1'
                  title='Course name'
                  description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aspernatur voluptates consequuntur obcaecati, consectetur eveniet, recusandae in, optio suscipit reiciendis cum? Et, tempore accusamus nulla illo debitis neque delectus obcaecati.'
                  imageClass='w-full h-full max-md:h-[100px]'
                />
                <Card
                  className='grid grid-cols-2 max-md:grid-cols-1'
                  title='Course name'
                  description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aspernatur voluptates consequuntur obcaecati, consectetur eveniet, recusandae in, optio suscipit reiciendis cum? Et, tempore accusamus nulla illo debitis neque delectus obcaecati.'
                  imageClass='w-full h-full max-md:h-[100px]'
                />
              </div>
            </div>
          </div>
          <div className='ranking max-lg:grid max-lg:grid-cols-2 max-md:w-full max-md:mt-[30px] max-sm:grid-cols-1'>
            <div className='flex justify-center streak max-sm:mb-[30px]'>
              <Heading
                size='5'
                className='capitalize'
              >
                Streak
              </Heading>
            </div>
            <div className='flex justify-center rank'>
              <div className='wrapper max-md:text-center w-full'>
                <Heading
                  size='5'
                  className='capitalize text-center'
                >
                  Bảng xếp hạng
                </Heading>
                <div className='rank-list'>
                  <div className='mt-[25px]' />
                  <CardUser
                    className='mb-[12px] w-full'
                    userName='username'
                    avatarUrl='https://cdn-icons-png.flaticon.com/512/219/219969.png'
                    score={0}
                  />
                  <CardUser
                    className='mb-[12px] w-full'
                    userName='username'
                    avatarUrl='https://cdn-icons-png.flaticon.com/512/219/219969.png'
                    score={0}
                  />
                  <CardUser
                    className='mb-[12px] w-full'
                    userName='username'
                    avatarUrl='https://cdn-icons-png.flaticon.com/512/219/219969.png'
                    score={0}
                  />
                  <CardUser
                    className='mb-[12px] w-full'
                    userName='username'
                    avatarUrl='https://cdn-icons-png.flaticon.com/512/219/219969.png'
                    score={0}
                  />
                  <CardUser
                    className='mb-[12px] w-full'
                    userName='username'
                    avatarUrl='https://cdn-icons-png.flaticon.com/512/219/219969.png'
                    score={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider className='divider h-[1px] w-full bg-black mt-[71px]' />
        <Footer />
      </Theme>
    </>
  )
}

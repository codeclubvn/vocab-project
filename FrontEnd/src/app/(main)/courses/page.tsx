import MainCourseCategory from '@/components/Main/Course/MainCourseCategory'

export default function Page() {
  return (
    <>
      <div className='gap-navbar' />
      <div className='container mb-10'>
        <h1 className=' mt-[100px] text-3xl'>DANH SACH KHOA HOC</h1>
        <div className='flex flex-col md:flex-row w-full justify-between mt-10'>
          <div className='w-[300px] md:mr-10'>
            <MainCourseCategory />
          </div>
          {/* <div className='flex-1  gap-4 flex flex-col'>
            <Card
              title='Khoa 1'
              numberOf={15000}
              author='ABC'
              headerClass='bg-[#f2f2f2] mb-2 p-2'
            />
            <Card
              title='Khoa 1'
              numberOf={15000}
              author='ABC'
              headerClass='bg-[#f2f2f2] mb-2 p-2'
            />
            <Card
              title='Khoa 1'
              numberOf={15000}
              author='ABC'
              headerClass='bg-[#f2f2f2] mb-2 p-2'
            />
            <Card
              title='Khoa 1'
              numberOf={15000}
              author='ABC'
              headerClass='bg-[#f2f2f2] mb-2 p-2'
            />
          </div> */}
        </div>
      </div>
    </>
  )
}

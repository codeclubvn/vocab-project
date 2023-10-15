import { ButtonCallToAction } from '@/components/common/Button'

function SectionCallToAction() {
  return (
    <section className='h-[100px] py-[80px] bg-secondary flex justify-center items-center'>
      <ButtonCallToAction
        route='/signup'
        className='bg-accent-0 !px-[40px]'
      >
        Đăng ký ngay
      </ButtonCallToAction>
      <ButtonCallToAction
        route='/support'
        className='bg-accent-1 mx-2 border-2 border-solid border-black !px-[40px]'
        classNameTitle='text-primary'
      >
        Ủng hộ
      </ButtonCallToAction>
    </section>
  )
}

export default SectionCallToAction

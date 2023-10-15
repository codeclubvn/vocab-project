import { ButtonCallToAction } from '@/components/common/Button'

interface SectionProps extends React.ComponentPropsWithoutRef<'section'> {
  title?: string
  description?: string
  image?: string
  imageClassName?: string
  buttonTitle?: string
  isRightSide?: boolean
  route?: string
}

const SectionHome = ({
  title = '',
  description = '',
  image = '',
  buttonTitle = '',
  route = '',
  isRightSide = false,
  imageClassName = 'w-full h-[250px] object-cover',
}: SectionProps) => {
  if (isRightSide) {
    return (
      <section className='my-[80px] '>
        <div className='container flex flex-wrap justify-center'>
          <div className='w-full md:w-1/2'>
            <div className='p-4'>
              <img
                src={image}
                alt=''
                className={`${imageClassName}`}
              />
            </div>
          </div>
          <div className='w-full md:w-1/2 '>
            <div className='p-4'>
              <h2 className='text-2xl font-bold mb-4'>{title}</h2>
              <p className='mb-4'>{description}</p>
              <ButtonCallToAction
                route={route}
                className='bg-accent-0 !px-[40px]'
              >
                {buttonTitle}
              </ButtonCallToAction>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className='my-[80px] '>
      <div className='container flex flex-wrap justify-center'>
        <div className='w-full md:w-1/2 '>
          <div className='p-4'>
            <h2 className='text-2xl font-bold mb-4'>{title}</h2>
            <p className='mb-4'>{description}</p>
            <ButtonCallToAction
              route={route}
              className='bg-accent-0 !px-[40px]'
            >
              {buttonTitle}
            </ButtonCallToAction>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <div className='p-4'>
            <img
              src={image}
              alt=''
              className={`${imageClassName}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionHome

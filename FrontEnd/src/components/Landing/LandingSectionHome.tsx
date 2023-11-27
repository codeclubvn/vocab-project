'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from '../UI/Button'

interface SectionProps extends React.ComponentPropsWithoutRef<'section'> {
  title?: string
  description?: string
  src?: string
  imageClassName?: string
  buttonTitle?: string
  isRightSide?: boolean
  href?: string
}

const LandingSectionHome = ({
  title = '',
  description = '',
  src = '',
  buttonTitle = '',
  href = '',
  isRightSide = false,
  imageClassName = 'w-full h-[250px] object-cover',
}: SectionProps) => {
  const router = useRouter()

  if (isRightSide) {
    return (
      <section className=' py-[80px] bg-[#f1ebeb] '>
        <div className='container flex flex-wrap justify-center'>
          <div className='w-full md:w-1/2'>
            <div className='p-4 overflow-hidden relative object-cover h-[300px]'>
              <Image
                fill
                src={src}
                alt=''
                className={`${imageClassName}`}
              />
            </div>
          </div>
          <div className='w-full md:w-1/2 '>
            <div className='p-4'>
              <h2 className='text-2xl font-bold mb-4'>{title}</h2>
              <p className='mb-4'>{description}</p>
              <Button
                onClick={() => router.push(href)}
                variant='solidBlack'
                className='px-[40px]'
              >
                {buttonTitle}
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className='py-[80px] '>
      <div className='container flex flex-wrap justify-center'>
        <div className='w-full md:w-1/2 '>
          <div className='p-4'>
            <h2 className='text-2xl font-bold mb-4'>{title}</h2>
            <p className='mb-4'>{description}</p>
            <Button
              onClick={() => router.push(href)}
              variant='solidBlack'
              className='px-[40px]'
            >
              {buttonTitle}
            </Button>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <div className='p-4 overflow-hidden relative object-cover h-[300px]'>
            <Image
              fill
              src={src}
              alt=''
              className={`${imageClassName}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingSectionHome

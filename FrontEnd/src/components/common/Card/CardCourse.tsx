/* eslint-disable no-unsafe-optional-chaining */
import { Text } from '@radix-ui/themes'
import Image from 'next/image'

interface CardCourseProps extends React.ComponentProps<'div'> {
  title?: string
  numberOf?: number
  author?: string
  className?: string
  totalWords?: number
  wordLearnt?: number
  description?: string
}

export default function CardCourse(props: CardCourseProps) {
  return (
    <div
      className={`w-full cursor-pointer mb-10 md:mb-0 flex-1 flex flex-col md:flex-row ${props?.className}`}
    >
      <div className='md:mr-[20px]'>
        <div className='md:h-full md:w-48 w-full h-[300px] object-cover mb-4 md:mb-0 relative'>
          <Image
            fill
            className='w-full h-full object-cover'
            src='/assets/images/example.jpg'
            alt='logoCourse'
          />
        </div>
      </div>
      <div className='flex-1'>
        <h2 className='mb-2 bg-[#f2f2f2] p-2'>{props?.title}</h2>
        {props.author && (
          <p>
            {props?.numberOf} Người học | Tạo bởi {props?.author}
          </p>
        )}
        {props.totalWords && props.wordLearnt && (
          <p>
            {`${(props?.wordLearnt / props.totalWords).toFixed(1)}%`}{' '}
            {`${props?.wordLearnt}/${props?.totalWords} Từ đang học`}{' '}
          </p>
        )}
        {props?.description && (
          <Text
            className='line-clamp-2'
            as='p'
            size='2'
          >
            {props?.description}
          </Text>
        )}
      </div>
    </div>
  )
}

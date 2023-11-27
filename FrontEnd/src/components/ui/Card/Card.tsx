/* eslint-disable no-unsafe-optional-chaining */
import { Text } from '@radix-ui/themes'
import Image from 'next/image'
import Button from '../Button'

interface CardProps extends React.ComponentProps<'div'> {
  className?: string
  imageClass?: string
  title?: string
  numberOf?: number
  author?: string
  totalWords?: number
  wordLearnt?: number
  description?: string
  moreBtnTitle?: string
  route?: string
  headerClass?: string
  content?: any
  isReverse?: boolean | undefined
}

export default function Card(props: CardProps) {
  return (
    <div className={`w-full flex-1 flex flex-col md:flex-row ${props?.className}`}>
      <div className={`md:mr-[20px] ${props.isReverse && 'order-2'}`}>
        <div
          className={`w-full h-[300px] object-cover mb-4 md:mb-0 relative ${
            props.imageClass || 'md:h-full md:w-48'
          }`}
        >
          <Image
            fill
            className='w-full h-full object-cover'
            src='/assets/images/example.jpg'
            alt='logoCourse'
          />
        </div>
      </div>
      <div className='flex-1 order-1'>
        {props.content || (
          <>
            <h2 className={props.headerClass}>{props?.title}</h2>
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
            {props?.moreBtnTitle && (
              <div className='w-full md:w-1/2 '>
                <Button
                  href={props.route}
                  className='bg-accent-0 !px-[40px]'
                >
                  {props.moreBtnTitle}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

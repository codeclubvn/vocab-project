import { Text } from '@radix-ui/themes'

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
    <div className={`w-full cursor-pointer flex-1 flex flex-col md:flex-row ${props?.className}`}>
      <div className='md:mr-[20px]'>
        <img
          className=' md:h-full md:w-48 w-full object-cover mb-4 md:mb-0'
          src='https://ksr-ugc.imgix.net/assets/025/867/455/c9e6c72592a0c2daff268afb45d604d7_original.png?ixlib=rb-4.1.0&crop=faces&w=1552&h=873&fit=crop&v=1563593007&auto=format&frame=1&q=92&s=035154de01cf39f862fe61fb730735dd'
          alt='logoCourse'
        />
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

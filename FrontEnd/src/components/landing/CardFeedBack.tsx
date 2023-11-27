import { Text } from '@radix-ui/themes'
import Image from 'next/image'

interface CardFeedBackProps {
  className?: string
  title: string
  description: string
  image: string
}

const CardFeedBack = ({
  className = '',
  title = '',
  description = '',
  image = '',
}: CardFeedBackProps) => {
  return (
    <div className={`flex flex-col justify-center items-center cursor-grab ${className}`}>
      <div className='mb-4 h-[200px] w-[200px] rounded-full overflow-hidden  relative object-cover'>
        <Image
          fill
          className='object-cover h-[100%] w-[100%]'
          src={image}
          alt={`This is a image of ${title}`}
        />
      </div>
      <Text className='mb-4 font-medium text-2xl uppercase'>{title}</Text>
      <Text className='max-w-[300px] text-center'>{description}</Text>
    </div>
  )
}

export default CardFeedBack

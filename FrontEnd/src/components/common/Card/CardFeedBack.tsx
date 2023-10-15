import Image from 'next/image'

interface CardFeedBackProps {
  className: string
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
    <div className={`pl-4 flex flex-col justify-center items-center ${className}`}>
      <div className='mb-4 h-[200px] w-[200px] rounded-full overflow-hidden'>
        <Image
          className='object-cover h-[100%] w-[100%]'
          src={image}
          alt={`This is a image of ${title}`}
        />
      </div>
      <h2 className='mb-4 font-medium text-2xl uppercase'>{title}</h2>
      <p className='max-w-[300px] text-center'>{description}</p>
    </div>
  )
}

export default CardFeedBack

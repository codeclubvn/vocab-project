import NextImage from 'next/image'
import { AspectRatio, Box } from '@radix-ui/themes'

interface Props {
  className?: string
  ratio?: number
  alt: string
  src: string
  fill?: boolean
}

function Image({ className, src, alt, fill = true, ratio }: Props) {
  return (
    <Box className={`${className}`}>
      <AspectRatio ratio={ratio}>
        <NextImage
          className='h-full w-full object-cover object-center'
          fill={fill}
          src={src}
          alt={alt}
        />
      </AspectRatio>
    </Box>
  )
}

export default Image

'use client'

import { Box, Heading, Text } from '@radix-ui/themes'
import Image from '@/components/ui/Image'
import { formatRelativeTime } from '@/utils/formatDate'
import { useRouter } from 'next/navigation'

type Props = {
  slug: string
  title: string
  description?: string
  size: number
  image?: string
  date: string
}

const LessonPreviewCard = ({ slug, title, description, size, image, date }: Props) => {
  const router = useRouter()
  return (
    <Box
      key={slug}
      onClick={() => {
        router.push(`/lessons/${slug}`)
      }}
      role='link'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          router.push(`/lessons/${slug}`)
        }
      }}
      className='bg-accent cursor-pointer shadow-lg rounded-xl overflow-hidden w-[250px] flex-shrink-0'
    >
      <div className='h-[150px] relative overflow-hidden'>
        {image && (
          <Image
            src='/assets/images/example.jpg'
            alt={title}
            className='w-full h-full object-cover transition-transform transform hover:scale-110'
          />
        )}
        <Image
          src='/assets/images/example.jpg'
          alt={title}
          className='w-full h-full object-cover transition-transform transform hover:scale-110'
        />
      </div>
      <div className='px-4 py-3'>
        <Heading
          size='5'
          className='font-medium mb-2 '
        >
          {title}
        </Heading>
        <div className='my-2 text-xs text-gray-500 flex items-center'>
          <span className='mr-2'>
            <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'>
              Words: {size}
            </span>
          </span>
          <span>{formatRelativeTime(date)}</span>
        </div>
        <div className='flex-grow flex flex-col min-h-[2rem]'>
          <Text className='text-sm flex-grow'>{description}</Text>
        </div>
      </div>
    </Box>
  )
}

export default LessonPreviewCard

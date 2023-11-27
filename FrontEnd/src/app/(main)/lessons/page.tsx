'use client'

import { Box, Heading } from '@radix-ui/themes'
import React from 'react'
import Loading from '../../../components/ui/Loading'
import LessonPreviewCard from '../../../components/main/lessons/LessonPreviewCard'
import { ILessonPreview } from '../../../types/Type'

export default function Page() {
  const { data, isLoading, error } = useLessonQuery()
  const listLesson: ILessonPreview[] = data?.data || []

  return isLoading ? (
    <Loading />
  ) : error ? (
    <h1 className='text-red'>Error</h1>
  ) : (
    <Box className='container mb-10'>
      <Heading className='my-8'>Gần đây</Heading>
      <Box className='flex items-center md:flex-wrap min-w-[200px] gap-4 overflow-x-auto'>
        {listLesson &&
          listLesson.map((lesson) => {
            return (
              <LessonPreviewCard
                key={lesson._id}
                slug={lesson._id}
                title={lesson.name}
                description={lesson.description}
                size={lesson.total}
                image={lesson.previewImage}
                date={lesson.created_at}
              />
            )
          })}
      </Box>
    </Box>
  )
}
function useLessonQuery(): { data: any; isLoading: any; error: any } {
  throw new Error('Function not implemented.')
}

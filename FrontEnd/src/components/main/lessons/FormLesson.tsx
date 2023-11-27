'use client'

import React, { FormEvent, useState } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { ICreateVocabDTO, ICreateLessonDTO } from '@/types/Type'
import useLessonQuery from '@/services/lesson/useLessonQuery'
import { useRouter } from 'next/navigation'
import ListVocab from './ListVocab'

function FormLesson() {
  const router = useRouter()
  const { addMutation } = useLessonQuery()
  const [nameLesson, setNameLesson] = useState<string>('')
  const [descriptionLesson, setDescriptionLesson] = useState<string>('')
  const [listVocab, setListVocab] = useState<ICreateVocabDTO[]>([
    {
      index: 1,
      front_text: '',
      back_text: 'string',
      image_url: '/string',
      sound_url: '/string',
      example: '/string',
    },
  ])

  const handleCreateLesson = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const data: ICreateLessonDTO = {
        name: nameLesson,
        description: descriptionLesson,
        vocabularies: listVocab,
      }
      const response = await addMutation.mutateAsync(data)
      router.push(`/lessons/${response.data}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form>
      <div className='collection-header my-8'>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-bold'>Tạo học phần mới</h1>
          <Button
            onClick={handleCreateLesson}
            className='self-start'
          >
            Tạo
          </Button>
        </div>
        <div className='max-w-[600px] flex flex-col gap-4 '>
          <Input
            value={nameLesson}
            onChange={(e) => setNameLesson(e.target.value)}
            variant='noneborder'
            id='title'
            className=''
            title='Tiêu đề'
            placeholder='Nhập tiêu đề, Ví dụ "Sinh hoc - Chương 22: Tiến hóa'
            type='text'
          />
          <Input
            value={descriptionLesson}
            onChange={(e) => setDescriptionLesson(e.target.value)}
            variant='noneborder'
            id='description'
            className=''
            title='Mô tả'
            placeholder='Thêm mô tả ...'
            type='text'
          />
        </div>
        {/* <div className='py-4 flex justify-between'>
          <div className='flex'>
            <Button
              className='self-start text-primary hover:bg-slate-300'
            >Nhập</Button>
            <Button
              className='self-start text-primary ml-4 hover:bg-slate-300'
            />
          </div>
          <div className='flex items-center self-end'>
            <Image
              src='/assets/icons/setting.svg'
              width={40}
              height={40}
              alt='Setting collections'
              className='w-[40px] h-[40px] cursor-pointer hover:bg-slate-300 rounded-full border-2 border-blue p-1'
            />
          </div>
        </div> */}
      </div>
      <ListVocab
        listVocab={listVocab}
        setListVocab={setListVocab}
      />
    </form>
  )
}

export default FormLesson

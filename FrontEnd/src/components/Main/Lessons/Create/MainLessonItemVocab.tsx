import { ICreateVocabDTO } from '@/types/Type'
import { useSortable } from '@dnd-kit/sortable'
import React from 'react'
import { CSS } from '@dnd-kit/utilities'
import Image from 'next/image'
import { Trash2, Grip } from 'lucide-react'
import Input from '@/components/UI/Input'

interface Props {
  id: number
  index: number
  item: ICreateVocabDTO
  idAnimate?: number | null
  handleOnChange: any
}

function MainLessonItemVocab({ id, index, idAnimate, item, handleOnChange }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      key={id}
      ref={setNodeRef}
      style={style}
      className={`animate__animated ${
        Number(id) === idAnimate ? 'animate__zoomIn' : ''
      }   animate__faster py-2 `}
    >
      <div className='flex flex-col rounded-md bg-[#f1ebeb]'>
        <div className='flex justify-between py-4 mx-6'>
          <span>{item.index}</span>
          <div className='flex'>
            <button
              type='button'
              className='mr-4 cursor-grab'
              {...attributes}
              {...listeners}
            >
              <Grip />
            </button>
            <button type='button'>
              <Trash2 />
            </button>
          </div>
        </div>
        <div className='w-full border border-slate' />
        <div className='flex flex-col w-full lg:flex-row justify-between px-4 '>
          <div className='flex flex-1 items-center'>
            <Input
              variant='noneborder'
              name='front_text'
              placeholder='Thuật ngữ'
              type='text'
              className='flex-1'
              value={item.front_text}
              onChange={(event) => handleOnChange(index, event)}
            />
          </div>
          <div className='flex-1 flex items-center p-6'>
            <Input
              variant='noneborder'
              name='back_text'
              title='Định nghĩa'
              placeholder='Định nghĩa'
              type='text'
              value={item.back_text}
              onChange={(event) => handleOnChange(index, event)}
            />
            <button
              type='button'
              // onClick={handleImageUpload}
              className='cursor-pointer p-4'
            >
              <div className='h-[80px] w-[80px] overflow-hidden relative object-cover rounded-sm'>
                <Image
                  className='object-cover'
                  fill
                  src={item.image_url || '/d'}
                  alt='Insert new image vocab'
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLessonItemVocab

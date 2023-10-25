'use client'

import { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import Image from 'next/image'
import { InputCreateCollection } from '../../common/Input'
import 'animate.css'

interface Props {
  id: number
  onClick: (id: number) => void
  isAnimateId: number | null
  value?: string
}

function CollectionCard({ id, value, onClick, isAnimateId }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
  const [imagePreview, setImagePreview] = useState<string>('/assets/images/example.jpg')

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]

    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImagePreview(imageUrl)
    }
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`animate__animated ${
        id === isAnimateId ? 'animate__zoomIn' : ''
      }   animate__faster py-2 `}
    >
      <div className='flex flex-col rounded-md bg-[#f2f2f2]'>
        <div className='flex justify-between py-4 mx-6'>
          <span>{id}</span>
          <div className='flex'>
            <button
              className='mr-4 cursor-grab'
              {...attributes}
              {...listeners}
            >
              Drag handle⣿
            </button>
            <div>0</div>
          </div>
        </div>
        <div className='w-full border border-slate' />
        <div className='flex flex-col lg:flex-row justify-between px-4 pt-4 pb-2'>
          <div className='flex-1'>
            <InputCreateCollection
              id='title'
              className='w-full flex-1 py-2 px-6'
              classNameLabel='text-sm'
              title='Thuật ngữ'
              placeholder={value}
              type='text'
            />
          </div>
          <div className='flex-1 flex'>
            <InputCreateCollection
              id='title'
              className='w-full py-2 px-6'
              classNameLabel='text-sm'
              title='Định nghĩa'
              placeholder='Định nghĩa'
              type='text'
            />
            <div className='bold solid'>
              <label
                htmlFor={`${id}-image`}
                className='cursor-pointer relative inline-block'
              >
                <div className='h-[80px] w-[80px] overflow-hidden relative object-cover rounded-sm'>
                  <Image
                    className='object-cover'
                    fill
                    src={imagePreview}
                    alt='Insert new image vocab'
                  />
                </div>
                <input
                  id={`${id}-image`}
                  type='file'
                  accept='image/*'
                  className='absolute opacity-0 top-0 left-0 w-0 h-0'
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='group w-full flex justify-center items-center h-6'>
        <button
          onClick={() => onClick(id)}
          className='duration-150 transition flex justify-center items-center scale-0 group-hover:scale-110 rounded-full bg-[#4cc3e3] p-2 z-10'
        >
          <Image
            height={20}
            width={20}
            src='/assets/icons/plus.svg'
            alt='Add one more card'
          />
        </button>
      </div>
    </div>
  )
}

export default CollectionCard

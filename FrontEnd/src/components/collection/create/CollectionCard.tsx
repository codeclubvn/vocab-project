'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import Image from 'next/image'
import { InputCreateCollection } from '../../common/Input'

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  id: any
}

function CollectionCard(props: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    // <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
    //   HELLO {props.id}
    // </div>
    <div
      ref={setNodeRef}
      style={style}
    >
      <div className='flex flex-col rounded-md bg-[#f2f2f2]'>
        <div className='flex justify-between py-4 mx-6'>
          <span>{props.id}</span>
          <div className='flex'>
            <button
              className='mr-4'
              {...attributes}
              {...listeners}
            >
              Drag handle⣿
            </button>
            <div>0</div>
          </div>
        </div>
        <div className='w-full border border-slate' />
        <div className='flex justify-between px-4 pt-4 pb-2'>
          <div className='flex-1'>
            <InputCreateCollection
              id='title'
              className='w-full flex-1 py-2 px-6'
              classNameLabel='text-sm'
              title='Thuật ngữ'
              placeholder='Thuật ngữ'
              type='text'
            />
          </div>
          <div className='flex-1'>
            <InputCreateCollection
              id='title'
              className='w-full py-2 px-6'
              classNameLabel='text-sm'
              title='Định nghĩa'
              placeholder='Định nghĩa'
              type='text'
            />
          </div>
        </div>
      </div>
      <div className='group w-full flex justify-center items-center h-6'>
        <button className='duration-150 transition flex justify-center items-center scale-0 group-hover:scale-110 rounded-full bg-[#4cc3e3] p-2'>
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

'use client'

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import 'animate.css'
import MainLessonItemVocab from './MainLessonItemVocab'
import { ICreateVocabDTO } from '@/types/Type'

interface Props {
  listVocab: ICreateVocabDTO[] | null
  setlistVocab: any
}

function MainLessonListVocab({ listVocab, setlistVocab }: Props) {
  const [idAnimate, setIdAnimate] = useState<null | { id: number }>(null)
  // const [imagePreview, setImagePreview] = useState<string>('/assets/images/example.jpg')

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0]

  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file)
  //     setImagePreview(imageUrl)
  //   }
  // }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (active.id !== over.id && listVocab !== null) {
      setlistVocab((prevlistVocab: ICreateVocabDTO[]) => {
        const clonelistItem: ICreateVocabDTO[] = [...prevlistVocab]
        const oldIndex = clonelistItem.findIndex((item) => item.index === active.id)
        const newIndex = clonelistItem.findIndex((item) => item.index === over.id)
        return arrayMove(clonelistItem, oldIndex, newIndex)
      })
    }
  }

  const addItems = (id: number) => {
    const newItem: ICreateVocabDTO = {
      index: id + 1,
      front_text: '',
      back_text: '',
      image_url: '/xem',
      sound_url: '',
      example: '',
    }

    if (listVocab) {
      const index = listVocab.findIndex((item) => item.index === id)
      const updatedItems = [
        ...listVocab.slice(0, index + 1),
        newItem,
        ...listVocab.slice(index + 1).map((item, i) => ({ ...item, id: id + i + 2 })),
      ]
      setlistVocab(updatedItems)
      const newId = { id: id + 1 }
      setIdAnimate(newId)
    }
  }

  const handleOnChange = (id: number, event) => {
    const list: ICreateVocabDTO[] = [...listVocab!]
    list[id][event.target.name] = event.target.value
    setlistVocab(list)
  }

  useEffect(() => {
    if (idAnimate) {
      // Set a timeout to remove the latestTodoId after the animation duration
      const timeoutId = setTimeout(() => {
        setIdAnimate(null)
      }, 500) // 500ms is the duration of the fadeIn animation
      return () => clearTimeout(timeoutId)
    }
  }, [idAnimate])

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={listVocab ? listVocab.map((item) => item.index) : []}
        strategy={verticalListSortingStrategy}
      >
        {listVocab &&
          listVocab.map((item: ICreateVocabDTO, index: number) => (
            <div key={index}>
              <MainLessonItemVocab
                id={item.index}
                index={index}
                item={item}
                handleOnChange={handleOnChange}
                idAnimate={idAnimate?.id}
              />
              <div className='group w-full flex justify-center items-center h-6'>
                <button
                  type='button'
                  onClick={() => addItems(item.index)}
                  className='duration-150 transition flex justify-center items-center scale-0 group-hover:scale-110 rounded-full bg-accent p-2 z-10'
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
          ))}
      </SortableContext>
      <button
        type='button'
        className='group mb-8 cursor-pointer flex w-full py-10 items-center rounded-md bg-[#f2f2f2]'
        onClick={() =>
          listVocab && listVocab.length > 0 && addItems(listVocab[listVocab.length - 1].index)
        }
      >
        <div className='flex items-center justify-center w-full'>
          <span className='relative group-hover:text-accent transition uppercase whitespace-nowrap font-bold'>
            + THÊM THẺ
            <div className='transition absolute w-full h-1 mt-2 group-hover:bg-accent bg-[#beb9b9]' />
          </span>
        </div>
      </button>
    </DndContext>
  )
}

export default MainLessonListVocab

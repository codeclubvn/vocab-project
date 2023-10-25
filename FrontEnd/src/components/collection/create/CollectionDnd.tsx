'use client'

import React, { useId, useState } from 'react'
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
import CollectionCard from '@/components/collection/create/CollectionCard'
import CollectionAddCard from '@/components/collection/create/CollectionAddCard'

function CollectionDnd() {
  const id = useId()
  const [items, setItems] = useState([
    { id: 1, value: 'Định nghĩa 1' },
    { id: 2, value: 'Định nghĩa 2' },
    { id: 3, value: 'Định nghĩa 3' },
  ])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )
  const [isAnimate, setIsAnimate] = useState<null | number>(null)

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  const addItems = (id: number) => {
    const newId = id + 1
    const newItem = { id: newId, value: `New ${Math.random()}` }
    const updatedItems = [...items]

    const index = items.findIndex((item) => item.id === id)
    updatedItems.splice(index + 1, 0, newItem)
    for (let i = index + 2; i < updatedItems.length; i++) {
      updatedItems[i].id = updatedItems[i].id + 1
    }
    setItems(updatedItems)
    setIsAnimate(newId)
  }

  return (
    <DndContext
      id={id}
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items}
        strategy={verticalListSortingStrategy}
      >
        {items.map((item) => (
          <CollectionCard
            value={item.value}
            key={item.id}
            id={item.id}
            onClick={addItems}
            isAnimateId={isAnimate}
          />
        ))}
      </SortableContext>
      <CollectionAddCard
        onClick={addItems}
        id={items[items.length - 1].id}
      />
    </DndContext>
  )
}

export default CollectionDnd

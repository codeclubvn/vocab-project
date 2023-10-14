"use client"
import React, { useId, useState } from 'react';
import CollectionCard from "@/components/collection/create/CollectionCard"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import type { Active, UniqueIdentifier } from "@dnd-kit/core";
import CollectionAddCard from "@/components/collection/create/CollectionAddCard"

type Props = {}

function CollectionDnd({

}: Props) {
  const id = useId()
  const [items, setItems] = useState(["1", "2", "3"]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );


  return (
    <DndContext
      id={id}
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={({ active }) => {
        console.log("start");
        console.log(active);
      }}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items}
        strategy={verticalListSortingStrategy}
      >
        {items.map(id => <CollectionCard key={id} id={id} />)}
      </SortableContext>
      <CollectionAddCard id="4" />
    </DndContext>

  );


  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }


}

export default CollectionDnd
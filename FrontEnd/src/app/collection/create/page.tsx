"use client"
import { useState } from "react"
import CollectionHeader from "@/components/collection/create/CollectionHeader"
import CollectionCard from "@/components/collection/create/CollectionCard"
import CollectionAddCard from "@/components/collection/create/CollectionAddCard"
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

export default function Page() {
  const [active, setActive] = useState<Active | null>(null);
  const [items, setItems] = useState(["1", "2", "3"]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  console.log(items);

  return (
    <div className="container">
      <div className="gap-navbar"></div>
      <CollectionHeader />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={({ active }) => {
          setActive(active);
        }}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items}
          strategy={verticalListSortingStrategy}
        >
          {items.map(id => <CollectionCard key={id} id={id} />)}

        </SortableContext>
      </DndContext>
      <CollectionAddCard id="3" />
    </div>
  )

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


import React, {useState} from 'react';
import {DndContext, DragOverlay} from '@dnd-kit/core';

import {Draggable} from './Draggable';

/* The implementation details of <Item> is not
 * relevant for this example and therefore omitted. */

export function App() {
  const [isDragging, setIsDragging] = useState(false);
  
  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <Draggable id="my-draggable-element">
        <Item />
      </Draggable>
      
      <DragOverlay>
        {isDragging ? (
          <Item />
        ): null}
      </DragOverlay>
    </DndContext>
  );
  
  function handleDragStart() {
    setIsDragging(true);
  }
  
  function handleDragEnd() {
    setIsDragging(false);
  }
}
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable
} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities"

export function Card() {
  const [add, setAdd] = useState(false);

  const handleAdd = () => {
    setAdd(true);
  };

  if (add) {
    return <AddListName />;
  } else {
    return (
      <article className="article-card1">
        <section className="card-box1">
          <button onClick={handleAdd} className="addList">
            <span className="mas">+</span> Añade una lista
          </button>
        </section>
      </article>
    );
  }
}

function AddListName() {
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddList();
    }
  };

  const handleAddList = () => {
    if (inputValue.trim() !== "") {
      setLists([...lists, inputValue]);
      setInputValue("");
    }
  };

  const handleDragEnd = (event) => {
    const {active, over} = event;
    if (active.id !== over.id) {
      const oldIndex = lists.indexOf(active.id);
      const newIndex = lists.indexOf(over.id);
      const newLists = [...lists];
      newLists.splice(oldIndex, 1);
      newLists.splice(newIndex, 0, active.id);
      setLists(newLists);
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <article className="article-card2">
        <div className="BlackCard">
          <input
            className="inputTitle"
            type="text"
            placeholder="Introduzca la lista..."
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
          <div className="Undo">
            <button className="AddListButton" onClick={handleAddList}>
              Añadir Lista
            </button>
            <button className="X">x</button>

            <SortableContext items={lists} strategy={verticalListSortingStrategy}>
              {lists.map((item, index) => (
                <SortableItem key={index} id={item} />
              ))}
            </SortableContext>
          </div>
        </div>
      </article>
    </DndContext>
  );
}

function SortableItem({id}) {
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div className="list-item" style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <div className="make-up">{id}</div>
    </div>
  );
}

import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
//import { Droppable } from "./Droppable1";
//import { Draggable } from "./Draggable";
//import { App } from "./App";

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
    //.trim evita espacios en blanco
    if (inputValue.trim() !== "") {
      setLists([...lists, inputValue]);
      setInputValue("");
    }
  };

  //Detecta elemento que termina de soltarse
  const handleDragEnd = () => {};
  return (
    <DndContext
      //Analiza elementos que se están reordenando
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

            {lists.map((item, index) => (
              //Lista de elementos ordenables
              <SortableContext
                key={index}
                //Array de elementos
                items={lists}
                //Que se ordenen verticalmente
                strategy={verticalListSortingStrategy}
              >
                <div className="list-item">
                  <div className="make-up">{item}</div>
                </div>
              </SortableContext>
            ))}
          </div>
        </div>
      </article>
    </DndContext>
  );
}

//import { AddListName } from "./AddListName";
import { useState } from "react";

export function Card() {
  const [add, setAdd] = useState(false);
  const handleadd = () => {
    setAdd(true);
  };

  if (add) {
    return <AddListName />;
  } else {
    return (
      <article className="article-card1">
        <section className="card-box1">
          <button onClick={handleadd} className="addList">
            <span className="mas">+</span> Añade una lista
          </button>
        </section>
      </article>
    );
  }
}

function AddListName() {
  return (
    <>
      <article className="article-card2">
        <div className="BlackCard">
          <input
            className="inputTitle"
            type="text"
            placeholder="Introduzca título de la lista..."
          ></input>
          <button className="AddListButton">Añadir Lista</button>
          <button className="X">x</button>
        </div>
      </article>
    </>
  );
}


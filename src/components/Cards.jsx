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
            + Añade una lista
          </button>
        </section>
      </article>
    );
  }
}

function AddListName() {
  return (
    <>
      <div className="BlackCard">
        <input
          className="inputTitle"
          type="text"
          placeholder="Introduzca título de la lista"
        ></input>
        <button className="AddListButton">Añadir Lista</button>
      </div>
    </>
  );
}

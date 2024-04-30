
import { useState } from "react";

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

  return (
    <article className="article-card2">
      <div className="BlackCard">
        <input
          className="inputTitle"
          type="text"
          placeholder="Introduzca título de la lista..."
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
          <div key={index} className="list-item">
            <div className="make-up">{item}</div>
          </div>
          
        ))}</div>
      </div>
    </article>
  );
}

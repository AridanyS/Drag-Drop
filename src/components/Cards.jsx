export function Card() {
  return (
    <>
      <article className="article-card1">
        <section className="card-box1">
       
          <button onClick={onClick} className="addList">+ Añade una lista</button>
        </section>
      </article>

    </>
  );
}


function onClick() {
    return(
    <input className="inputTitle" type="text" placeholder="Introduzca título de la lista"></input>) 

}

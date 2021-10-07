import { useState } from "react";

export default function Cueilleur() {
  const [chosen, setChosen] = useState();
  function onSubmit(e) {
    e.preventDefault();
    setChosen(
      chooser(
        e.target.vinhos.value
          .split("\n")
          .flatMap((v) => v.split(","))
          .filter(Boolean)
          .map((v) => v.trim())
      )
    );
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <div class="wrapper-textarea">
          <textarea type="text" name="vinhos" />
        </div>
        <button type="submit">
          <span role="img" aria-label="Escolher vinho">
            🍷
          </span>
        </button>
      </form>
      {chosen && (
        <>
          <h3>Parabéns! Você vai beber</h3>
          <h1>{chosen}</h1>
        </>
      )}
    </>
  );
}

function chooser(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

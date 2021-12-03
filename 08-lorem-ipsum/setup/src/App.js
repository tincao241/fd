import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  // let paragraphs = "";

  // for (let i = 0; i < index; i++) {
  //   {
  //     paragraphs += paragraph[i] +<br />;
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };

  return (
    <>
      <section className="section-center">
        <form onSubmit={handleSubmit}>
          <h3>TIRED OF BORING LOREM IPSUM</h3>
          <label for="input">Paragraphs</label>
          <input
            id="input"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />

          <button type="submit" className="btn">
            Generate
          </button>
        </form>
        <article className="lorem-form">
          <p>
            {text.map((value, index) => {
              return <p key="index"> {value} </p>;
            })}
          </p>
        </article>
      </section>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [ppl, setPeople] = useState(data);
  return <main>
    <section className="container">
      <h3>0 birthdays today</h3>
      <List peoples ={ppl}/>
      <button onClick={()=> setPeople([])}>clear all</button>
    </section>
  </main>;
}

export default App;

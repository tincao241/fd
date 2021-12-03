import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all',...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems]= useState(items);
  

  const filterItems =(category) =>{
    if(category == "all"){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    
    setMenuItems(newItems);
    
  }
  return (
    <main className="menu">
      <h2 className="title" >Our menu</h2>
      <div className="underline"></div><br/>

      <div className="btn-container">
        {allCategories.map((category) =>{
          return <button onClick={()=>filterItems(category)} className="filter-btn">{category}</button>
          })}
      </div>
      {/* <div className="btn-container">
        <button onClick={()=>filterItems("all")} className="filter-btn">All</button>
        <button onClick={()=>filterItems("breakfast")} className="filter-btn">breakfast</button>
        <button onClick={()=>filterItems("lunch")} className="filter-btn">lunch</button>
        <button onClick={()=>filterItems("shakes")} className="filter-btn">shakes</button>
      </div> */}
      <div className="section-center">
      {menuItems.map((item) =>{
          return <Menu className="menu-item" key={item.id} {...item} />
        })}
      </div>
        
      
    </main>
  );
}

export default App;

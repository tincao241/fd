import React from 'react';

const Menu = ({id, title, category, price, desc, img}) => {
  return (
    <article className = "menu-item ">
      
      <img className="photo" src ={img} alt={category}/>
      
        <div className="item-info" key={id}>
          <header>
          <h4>{title}</h4>
          
          <h4 className="price">{price}</h4>
          </header>
          <p className="item-text">{desc}</p>
        </div>
      
      
      
    </article>
  );
};

export default Menu;

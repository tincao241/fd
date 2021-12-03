import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [index, setIndex] = useState(1);

  const nextSlide = () => {
    if(index >= data.length)
    {
      setIndex(1)
    }else{
      setIndex(index + 1);
    }
    
    console.log({index});
  };
  const prevSlide = () => {
    if(index <= 0)
    {
      setIndex(data.length)
    }else{
      setIndex(index - 1);
    }
    
  };

  return (
    <section>
      <div className="section title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {data.map((review) => {
          const { id, image, name, title, quote } = review;
          return (
            // {`${index===id} : "activeSlide" : "lastSlide" `}
            <article key={id} className={`${index===id ? "activeSlide" : "nextSlide"} `} >
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <span className="text">{quote}</span>
              <div className="icon">
                <FiChevronLeft className="prev" onClick={prevSlide} />
                <FiChevronRight className="next" onClick={nextSlide} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default App;

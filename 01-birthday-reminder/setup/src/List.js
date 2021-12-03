import React from 'react';

const List = ({peoples}) => {
  return (
    <>
      {peoples.map((person) =>{
        const {id, name, age, image} = person;
        return(
          <article key = {id} className='person' >
            <img src={image} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <h5>{age} year old</h5>
            </div>
          </article>
        );
      })
      }
    </>
  );
};

export default List;

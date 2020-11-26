import React from "react";

const List = (props) => {
  return (
    <ul>
      {props.dogs.map((dog, index) => {
        return (
          <div key={index} className="dog-profile">
            <li>
              <p>Name: {dog.name}</p>
              <p>Age: {dog.age}</p>
              <p>Mileage: {dog.mileage}</p>
            </li>
            <img src={dog.picture} alt={dog.name}></img>
          </div>
        );
      })}
    </ul>
  );
};

export default List;

import React, { useState } from "react";
import './higherOrderFunction.css';

const HigherOrderFunction = () => {
  const [people, setPeople] = useState([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 4, name: "Diana", age: 40 }
  ]);

  
  const incrementAges = () => {
    const updatedPeople = people.map(person => ({
      ...person,
      age: person.age + 1
    }));
    setPeople(updatedPeople);
  };

  return (
    <div className="container">
      <h1 className="main-title">People Lists</h1>

      <div className="list-container">
        <h2 className="list-title">Original List</h2>
        <ul className="people-list">
          {people.map(person => (
            <li key={person.id} className="person-item">
              ID: {person.id}, Name: {person.name}, Age: {person.age}
            </li>
          ))}
        </ul>
      </div>

      <button className="increment-button" onClick={incrementAges}>Increment Ages</button>
    </div>
  );
};

export default HigherOrderFunction;

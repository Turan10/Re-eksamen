import React, { useState } from "react";

const HigherOrderFunction = () => {
  const [toggle, setToggle] = useState(false);

  const myArray = [1, 2, 3, 4, 5];

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const mappedFunction = myArray.map((number) => number * 2);

  const printedArray = mappedFunction.map((number, index) => {
    return <li key={index}>{number}</li>;
  });

  return (
    <div>
      <h1>Higher Order Function</h1>
      <h2>Map function</h2>

      <p>My array: {myArray.join(", ")}</p>

      <p>When button is clicked every element will be doubled in the array</p>
      <button onClick={handleToggle}>Click me</button>
      {toggle && (
        <div>
          <p>This is the mapped array:</p>
          <ul>{printedArray}</ul>
        </div>
      )}
    </div>
  );
};

export default HigherOrderFunction;

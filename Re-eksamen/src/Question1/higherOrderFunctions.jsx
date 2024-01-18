import React, { useState } from "react";


const HigherOrderFunction = () => {
  const [result, setResult] = useState("");

  const myArray = [1, 2, 3, 4, 5];

  const mappedFunction = myArray.map((number) => {
    return number * 2;
  });

  const printetArray = mappedFunction.map((number) => {
    return <p>{number}</p>;
  });

  return (
    <div>
      <h1>Higher Order Function</h1>
      <h2>Map function</h2>

      <p>My array: {myArray}</p>

      <p>when button is clicked every element will be doubled in the array</p>
      <button onClick={() => setResult(printetArray)}>Click me</button>
      {result && <p>This is the mapped array {printetArray}</p>}
    </div>
  );
};

export default HigherOrderFunction;

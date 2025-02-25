import { useState } from "react";
import "./Calculator.css";

const CalculatorNumbers = [
  1,2,3,
  4,5,6,
  7,8,9,
]

const Actions = [
  '+', '-', '/', '*', '=', 'C'
]

export default function Calculator() {
  let [number, setNumber] = useState(0);
  
  const printNumberHandler = (pressedNumber) => {
      
      
  }

  return (
    <>
      <input type="text" readOnly value={number}/>
       {CalculatorNumbers.map(number => (
          <button className="button" key={number} onClick={() => {printNumberHandler(number)}}>{number}</button>
       ))}
    </>
    
  );
}

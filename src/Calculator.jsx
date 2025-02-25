import { useState } from "react";
import "./Calculator.css";

const CalculatorNumbers = [
  0,1,2,3,
  4,5,6,
  7,8,9,
]

const Actions = [
  '+', '-', '/', '*', '=', 'C'
]

export default function Calculator() {
  let [number, setNumber] = useState('');
  let [prevNumber, setPrevNumber] = useState('')

  const getNumberHandler = (pressedNumber) => {
    setPrevNumber(() => {
        prevNumber = pressedNumber; 
      })
      console.log(prevNumber);
  }

  const getActionHandler = (action) => {
      console.log(action);
      
  }

  return (
    <>
      <input type="text" readOnly value={number}/>
       {CalculatorNumbers.map(number => (
          <button className="button" key={number} onClick={() => {getNumberHandler(number)}}>{number}</button>
       ))}
       {Actions.map(action => (
          <button className="button operator" key={action} onClick={() => {getActionHandler(action)}}>{action}</button>
       ))}
    </>
    
  );
}

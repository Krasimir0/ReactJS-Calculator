import { useState } from "react";
import "./Calculator.css";

const CalculatorNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Actions = ["+", "-", "/", "*", "=", "C"];

export default function Calculator() {
  let [firstNumber, setNumber] = useState("");
  let [secondNumber, setSecondNumber] = useState("");
  let [action, setAction] = useState("");
  const [result, setResult] = useState(null);

  const getNumberHandler = (pressedNumber) => {
    if (action === "") {
      setNumber((prevNum) => {
       return prevNum + pressedNumber;
      });
    } else {
      setSecondNumber((prevNum) => {
       return prevNum + pressedNumber;
      });
    }
  };

  const getActionHandler = (action) => {
    if (action === "C") {
      setNumber("");
      setSecondNumber("");
      setAction("");
      setResult(null);
    } else if (action === "=") {
      let result = 0;
      switch (action) {
        case "+":
          result = firstNumber + secondNumber;
          console.log(result);
          
          break;
        case "-":
          result = firstNumber - secondNumber;
          break;
        case "/":
          result = firstNumber / secondNumber;
          break;
        case "*":
          result = firstNumber * secondNumber;
          break;
        default:
          result = 0;
          break;
      }
      setResult(result);
      setNumber(result.toString());
      setSecondNumber("");
      setAction("");
    } else {
      setAction(action);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input
          type="text"
          readOnly
          value={
            result !== null
              ? result
              : `${firstNumber} ${action} ${secondNumber}`
          }
        />
      </div>
      {CalculatorNumbers.map((number) => (
        <button
          className="button"
          key={number}
          onClick={() => {
            getNumberHandler(number);
          }}
        >
          {number}
        </button>
      ))}
      {Actions.map((action) => (
        <button
          className="button operator"
          key={action}
          onClick={() => {
            getActionHandler(action);
          }}
        >
          {action}
        </button>
      ))}
    </div>
  );
}

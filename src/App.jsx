import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action/index";

function App() {
  const countState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <h2>Using React Redux</h2>

      <div>
        <a
          title="quantity__minus"
          className="Decrement"
          onClick={() => dispatch(decNumber())}
        >
          -
        </a>
        <input
          name="quantity"
          type="text"
          className="quantity__input"
          value={countState}
        />
        <a
          title="qunatity__plus"
          className="Increment"
          onClick={() => dispatch(incNumber(5))}
        >
          +
        </a>
      </div>
    </div>
  );
}

export default App;

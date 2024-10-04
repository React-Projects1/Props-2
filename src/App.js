import { useState } from "react";
import "./App.css";
import Code1 from "./components/code1";

function App() {
  let styleFirstWay = {
    backgroundColor: "lemonchiffon",
  };
  let styleSecondWay = {
    backgroundColor: "lightblue",
  };

  let [user, setUser] = useState([
    { name: "marwa", age: "23" },
    { name: "maha", age: "50" },
    { name: "sabah", age: "26" },
  ]);

  let [number, setNumber] = useState(0);

  let plus = () => {
    setNumber(number + 1);
  };
  let minus = () => {
    setNumber(number - 1);
  };
  let divided = () => {
    setNumber(number / 2);
  };

  return (
    <div className="App">
      <div className="operations">
        <h2>{number}</h2>
        <div>
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
          <button onClick={divided}>/</button>
          <button onClick={() => setNumber(number * 2)}>*2</button>
        </div>
      </div>

      <div className="info-first-way" style={styleFirstWay}>
        <Code1 name="hadeel" age="23" />
        <Code1 name="dana" age="30" />
        <Code1 name="sara" age="24" />
      </div>

      {user.map((item) => {
        return (
          <div className="info-second-way" style={styleSecondWay}>
            <Code1 name={item.name} age={item.age} />
          </div>
        );
      })}
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {
  const [hello, SetHello] = useState();
  const [helloName, SetHelloName] = useState();
  const [input, setInput] = useState();

  const getHello = (props) => {
    fetch("http://localhost:3001/hello/alex")
      .then((res) => res.json())
      .then((message) => {
        console.log(message.message);
        SetHello(message.message);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getHelloName = (props) => {
    fetch(`http://localhost:3001/hello/${input}`)
      .then((res) => res.json())
      .then((message) => {
        console.log(message.message);
        SetHelloName(message.message);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="App">
      <p>
        <button onClick={getHello}>Hello</button>
        <p>{hello}</p>
      </p>

      <p>
        <input onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={getHelloName}>Hello Name</button>
        <p>{helloName}</p>
      </p>
    </div>
  );
}

export default App;

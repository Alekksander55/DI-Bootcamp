import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const a = useRef();
  const b = useRef();
  const [result, setResult] = useState(0);

  function addNumbers() {
    let result = Number(a.current.value) + Number(b.current.value);
    console.log(result);
    setResult(result);
  }

  function minusNumbers() {
    let result = Number(a.current.value) - Number(b.current.value);
    setResult(result);
  }

  function divideNumbers() {
    let result = Number(a.current.value) / Number(b.current.value);
    setResult(result);
  }

  function multiplyNumbers() {
    let result = Number(a.current.value) * Number(b.current.value);
    setResult(result);
  }
  return (
    <>
      <center>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "50px",
            width: "400px",
            backgroundColor: "pink",
          }}
        >
          <h2> The best calculator in the world ever made</h2>
          <input
            style={{
              backgroundColor: "lightblue",
              borderRadius: "50px",
              fontSize:'25px',
              textAlign:'center',
              height: "40px",
              width: "100px",
            }}
            type="number"
            ref={a}
          ></input> &nbsp;&nbsp;
          <input
            style={{
              backgroundColor: "lightblue",
              borderRadius: "50px",
              textAlign:'center',
              fontSize:'25px',
              height: "40px",
              width: "100px",
            }}
            type="number"
            ref={b}
          ></input>
          <br /><br />
          <button style={{fontSize:'25px', borderRadius:'80px'}} onClick={addNumbers}>+</button> &nbsp;&nbsp;
          <button style={{fontSize:'25px', borderRadius:'80px'}} onClick={minusNumbers}>-</button> &nbsp;&nbsp;
          <button style={{fontSize:'25px', borderRadius:'80px'}} onClick={divideNumbers}>/</button> &nbsp;&nbsp;
          <button style={{fontSize:'25px', borderRadius:'80px'}} onClick={multiplyNumbers}>*</button> &nbsp;&nbsp;
          <h1>{result}</h1>
        </div>
      </center>
    </>
  );
}

export default App;

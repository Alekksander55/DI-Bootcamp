import "./App.css";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [request, setRequest] = useState("Test");
  const inputText = useRef();
  const url = "http://localhost:3001/api/hello";

  useEffect(() => {
    async function fetchData() {

      try {
        const response = await fetch(url);
        const text = await response.text();
        console.log(text);
        setRequest(text);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = inputText.current.value;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: `I received your POST request. This is what you sent me "${message}"` }),
    };
    const resJson = await fetch('http://localhost:3001/api/world', options)
    const res = await resJson.json()
    console.log(res)

  };

  return (
    <div className="App">
      <header className="App-header">
        {request}

        <form onSubmit={handleSubmit}>
          <h3>Post to the server</h3>
          <input type="text" ref={inputText}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import quotes from "./components/QuotesDatabase";
import { useState } from "react";

let newQuotes = [...quotes];
let colors = ['white', 'blue', 'red', 'pink', 'lightblue', 'grey', 'beige', 'green'];

function App() {
  
  const [quote, setQuote] = useState('Click on generate to get quotes');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('blue')
  console.log(newQuotes);
  
  function generateQuote() {
    let rand = Math.floor(Math.random() * newQuotes.length);
    let randColors = Math.floor(Math.random() * colors.length);
    if (newQuotes.length === 0) {
      setQuote("Oups ! We've already seen all the quotes...");
      setAuthor("");
      return null
    } else setQuote(newQuotes[rand].quote);
    setAuthor(newQuotes[rand].author);
    newQuotes.splice(rand, 1);
    setColor(colors[randColors])
  }

  return (
    <center>
      {" "}
      <div style={{ display: "inline-block", border: "1px solid black", backgroundColor:`${color}` }}>
        {" "}
        <br></br>
        <div style={{ width: "450px", height: "100px" }}>
          {quote} <div style={{ fontWeight: "bold" }}>{author}</div>
        </div>
        <button
          style={{ width: "90px", height: "20px" }}
          onClick={generateQuote}
        >
          Generate
        </button>
      </div>
    </center>
  );
}

export default App;

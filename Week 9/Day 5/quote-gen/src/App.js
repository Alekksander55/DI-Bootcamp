import "./App.css";
import quotes from "./components/QuotesDatabase";
import { useState } from "react";

let newQuotes = [...quotes];
let colors = ['white', 'blue', 'red', 'pink', 'lightblue', 'grey', 'beige', 'green'];

function App() {
  
  const [quote, setQuote] = useState('Click on generate to get quotes');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('blue')
  const [btnColor, setBtnColor] = useState('white')
  console.log(newQuotes);
  
  function generateQuote() {
    let rand = Math.floor(Math.random() * newQuotes.length);
    let randColors = Math.floor(Math.random() * colors.length);
    let randBtnColors = Math.floor(Math.random() * colors.length);
    if (newQuotes.length === 0) {
      setQuote("Oups ! We've already seen all the quotes...");
      setAuthor("");
      return null
    } else setQuote(newQuotes[rand].quote);
    setAuthor(newQuotes[rand].author);
    newQuotes.splice(rand, 1);
    setColor(colors[randColors])
    setBtnColor(colors[randBtnColors])
  }

  return (
    <center>
      <div style={{ display:'inline-block', margin:'10px', padding:'10px'}}>
      {" "}
      <div style={{ borderRadius:'30px', border: "4px solid black", backgroundColor:`${color}` }}>
        {" "}
        <br></br>
        <div style={{ width: "450px", height: "100px", padding:'60px', font:'initial', fontSize:'40px'}}>
          "{quote}"<div style={{ fontWeight: "bold"}}>{author}</div>
        </div>
        <button
          style={{ width: "90px", height: "20px", margin:'50px', backgroundColor:`${btnColor}`, borderRadius:'30px' }}
          onClick={generateQuote}
        >
          Generate
        </button>
      </div>
      </div>
    </center>
  );
}

export default App;

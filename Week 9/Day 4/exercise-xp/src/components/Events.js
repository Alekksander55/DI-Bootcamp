import { useState, useRef } from "react";

const Events = (props) => {
    const [text, setText] = useState()
    const [toggleState, setToggle] = useState(true)
    const inputRef = useRef()

function clickMe(){
    alert("I was clicked");
  };

function handleKeyDown(event){
    setText(inputRef.current.value)
    if (event.key === 'Enter'){
    alert(`The Enter key was pressed, your input is ${text}`);
    }
  };

  function switchOnOff(){
    console.log(toggleState)
    if(toggleState == true)
    setToggle(false)
    else setToggle(true)
  }

  return (
    <>
      <button onClick={clickMe}>Click me please</button>
      <input placeholder={"PRESS ENTER"} ref={inputRef} onKeyDown={handleKeyDown}></input>
      <button onClick={switchOnOff}>{toggleState ? 'ON' : 'OFF'}</button>
    </>
  );
};

export default Events;

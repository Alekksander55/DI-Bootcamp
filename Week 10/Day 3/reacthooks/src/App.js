import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display";
import Action from "./components/Action";
import { useState, createContext, useContext } from "react";

//                   APP
//                /      \
//            Display    Action
//              /           \
//         ShowCounter     Button
//            /

export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <AppContext.Provider value={{ count, setCount, name: "Alex" }}>
          <Display />
          <Action />
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;

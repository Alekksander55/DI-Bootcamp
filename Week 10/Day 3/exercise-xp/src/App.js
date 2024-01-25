import logo from "./logo.svg";
import "./App.css";
import { createContext, useState } from "react";
import Exercise2 from './components/Exercise2'
import TodoList from "./components/Exercise3";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [checked, setChecked] = useState(false);

  const handleCheck = (e) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, handleCheck }}>
      <div className="App">
        <header className="App-header" id={theme}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Are you more dark-mode or light-mode ?</p>
          <label>{checked ? <p>Dark</p> : <p>Light</p>} <input type="checkbox" onChange={handleCheck} /> </label>
          <Exercise2 />
          <TodoList/>
        </header>
      </div>
    </ThemeContext.Provider>

    
  );
}

export default App;


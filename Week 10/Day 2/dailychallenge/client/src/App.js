import "./App.css";
import React, { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {useEffect(() => {
          // declare the data fetching function
          const fetchData = async () => {
            const response = await fetch("http://localhost:3001/api/hello", {
              mode: "cors",
            }); 
            console.log( response)
            
          };

          // call the function
          fetchData()
            // make sure to catch any error
            .catch(console.error);
        }, [])}
      </header>
    </div>
  );
}

export default App;

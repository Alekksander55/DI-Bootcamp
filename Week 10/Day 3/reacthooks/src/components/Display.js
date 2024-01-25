import ShowCounter from "./ShowCounter";
import { createContext } from "react";


export const DisplayContext = createContext();

const Display = (props) => {
  return (
    <>
      <DisplayContext.Provider value={{email:'ok@gmail.com'}}>
        <ShowCounter />
      </DisplayContext.Provider>
    </>
  );
};

export default Display;

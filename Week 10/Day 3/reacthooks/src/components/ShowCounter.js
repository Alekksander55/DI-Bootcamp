import { useContext } from "react";
import { AppContext } from "../App";
import Name from "./Name";


const ShowCounter = (props) => {
    const {count, name} = useContext(AppContext)
  return (
    <>
      <h2>Counter: {count}</h2>
      <h3>Name: {name}</h3>
      <Name/>
    </>
  );
};

export default ShowCounter;

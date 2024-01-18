import React, { useState } from "react";
import Garage from "./Garage";

const Car = (props) => {
  const { name, model } = props.carinfo;
  const [color, setColor] = useState("red");
  return (
    <>
      <h3>This brand new {name} is a {color} {model}</h3>
      <h3><Garage size="small but comfy" /></h3>
    </>
  );
};

export default Car;

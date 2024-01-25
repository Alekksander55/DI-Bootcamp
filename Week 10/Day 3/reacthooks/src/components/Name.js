import { useContext } from "react";
import { AppContext } from "../App";
import { DisplayContext } from "./Display";

const Name = (props) => {
  const { name } = useContext(AppContext);
  const { email } = useContext(DisplayContext);
  return (
    <>
      {email}
    </>
  );
};

export default Name;

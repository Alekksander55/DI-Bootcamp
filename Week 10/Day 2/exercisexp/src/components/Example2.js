import { useEffect } from "react";
import myJson2 from "../myJson2.json";

const Example2 = (props) => {
  return (
    <>
      {myJson2.Skills.map((item,index) => {
        return (
          <div key={index}>
            <h4>{item.Area}</h4>
            <p>
              {item.SkillSet.map((item,index) => {
                return <li key={index}>{item.Name}</li>;
              })}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Example2;

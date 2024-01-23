import myJson2 from "../myJson2.json";

const Example1 = (props) => {
  return (
    <>
      {myJson2.SocialMedias.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </>
  );
};

export default Example1;

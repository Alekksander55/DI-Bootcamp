import "./User.css";
// import Button from "react-bootstrap/Button";

const User = (props) => {
  const { name, email, id, username } = props.userinfo;
  return (
    <div className="tc bg-light-green br3 ma2 dib bw2 grow shadow">
      <img
        src={`https://robohash.org/${id}?size=150x150`}
        className="userimage"
        alt="myimage"
      />
      <h5>{name}</h5>
      <h5>{email}</h5>
      <h5>{username}</h5>

    </div>
  );
};

export default User;

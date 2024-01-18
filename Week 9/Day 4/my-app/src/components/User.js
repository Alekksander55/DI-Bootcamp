import React from "react";

class User extends React.Component {
//   constructor() {
//     super();
//   }
  render(){
    const { name, email, id, username } = this.props.userinfo;
  return (
    <div className="tc bg-light-green br3 ma2 dib bw2 grow shadow-5">
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
  }

  export default User

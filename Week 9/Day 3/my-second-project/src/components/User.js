const User = (props) => {
  console.log(props)
  const {name, email, id} = props.userinfo
  return (
    <>
      <h6>Name: {name}</h6>
      <h6>Email: {email}</h6>
      <h6>id: {id}</h6>

    </>
  );
};

export default User;

import { useState } from "react";

const MyForm = (props) => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    age: "",
    destination: "",
    gender: "",
    nuts: "",
    lactose: "",
    vegan: "",
  });

  const query = `/?firstName=${user.firstname}&lastName=${user.lastname}&age=${user.age}&gender=${user.gender}&destination=${user.destination} `

  const handleSubmit = (e) => {
    // e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // fetch('/some-api', { method: form.method, body: formData });

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    setUser(formJson);
  };
  return (
    <>
      <div style={{ backgroundColor: "red" }}>
        <form method="GET" action={query} onSubmit={handleSubmit}>
          <input type="text" name="firstname" placeholder="First Name" />{" "}
          <br></br>
          <input type="text" name="lastname" placeholder="Last Name" />{" "}
          <br></br>
          <input type="text" name="age" placeholder="Age" />
          <br></br>
          <label>
            Male: &nbsp;&nbsp;&nbsp;
            <input type="radio" name="gender" value="male" />
          </label>{" "}
          <br></br>
          <label>
            Female:
            <input type="radio" name="gender" value="female" />
          </label>
          <br></br>
          <label>
            {" "}
            Destination:{" "}
            <select name="destination" id="destination">
              <option>--- Please choose a destination ---</option>
              <option value="Thailand">Thailand</option>
              <option value="Japan">Japan</option>
              <option value="Brazil">Brazil</option>
            </select>
          </label>
          <p>Dietary Restrictions</p>
          <label>
            Nuts free ?<input type="checkbox" name="nuts" value="Yes"></input>
          </label>
          <label>
            Lactose free ?
            <input type="checkbox" name="lactose" value="Yes"></input>
          </label>
          <label>
            Vegan ?<input type="checkbox" name="vegan" value="Yes"></input>
          </label>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
      <div style={{ backgroundColor: "blue" }}>
        <h3>Entered information: </h3>
        <p>
          Your name: {user.firstname} {user.lastname}
        </p>
        <p>Your age: {user.age}</p>
        <p>Your gender:{user.gender}</p>
        <p>Your destination:{user.destination}</p>
        <p>Your dietary restrictions:</p>
        <p>**Nuts free :{user.nuts}</p>
        <p>**Lactose free :{user.lactose}</p>
        <p>**Vegan meal :{user.vegan}</p>
      </div>
    </>
  );
};

export default MyForm;

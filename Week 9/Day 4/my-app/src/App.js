import "./App.css";
import React, { Component, useState, useEffect } from "react";
import User from "./components/User";
// import users from "./users.json"

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "Robots",
//       users: [],
//     };
//   }

//   changeTitle = () => {
//     // this.state.title = 'Users'
//     this.setState({ title: "Users" });
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         this.setState({users:data})
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.title}</h1>
//         <button onClick={this.changeTitle}>Change Title</button>
//         {this.state.users.map((item) => {
//           return <User userinfo={item} key={item.id} />;
//         })}
//       </div>
//     );
//   }
// }

const App = () => {
  const [title, setTitle] = useState("My title");
  const [users, setUsers] = useState()

useEffect(()=>{
  if(users)
changeTitle()
},[users])

  const changeTitle = () => {
    setTitle('My new title')
    // getUsers()
  };
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Change Title</button>
      {
        users?users.map(item =>{return <User userinfo={item} key={item.id}/>}):null
      }
    </div>
  );
};

export default App;

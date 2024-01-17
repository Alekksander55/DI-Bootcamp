import logo from "./logo.svg";
import "./App.css";
import UserFavoriteAnimals from "./components/UserFavoriteAnimals";
import Exercise from "./components/Exercise3";

// const myElement = <h1>I love JSX !</h1>
// const sum = 5+5

// {myElement}
// React is {sum} times better with JSX

// const user = {
//   firstName: "Bob",
//   lastName: "Dylan",
//   favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
// };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Exercise/>
        {/* <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals fav={user.favAnimals} /> */}
      </header>
    </div>
  );
  }

export default App;

import "./App.css";
import User from "./components/User";
import users from "./users.json"



function App() {
  return (
    <div className="App">
        {
          users.map(item => {
            return <User userinfo={item} key={item.id} />
          })
        }
    </div>
  );
}

export default App;

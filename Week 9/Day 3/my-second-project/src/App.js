import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";
import SubHello from "./SubHello";
import User from "./components/User";

const arr = [
  {id:1, name:'John', email:'john@gmail.com'},
  {id:2, name:'Alex', email:'alex@gmail.com'},
  {id:3, name:'Dadavleloupv', email:'dav@gmail.com'},
  {id:1, name:'dick', email:'dsd@gmail.com'},
  {id:2, name:'Charles', email:'gvv@gmail.com'},
  {id:3, name:'loupv', email:'davssdsd@gmail.com'},
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          arr.map((item,index)=>{
            return (
              <User userinfo={item} key={index}/>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;

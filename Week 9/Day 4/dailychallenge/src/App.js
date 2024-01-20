import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaScript", votes: 0},
    {name: "Java", votes: 0}
  ])

function incrementVote(index){
  const newLanguages = [...languages]
  newLanguages[index].votes = newLanguages[index].votes + 1
  setLanguages(newLanguages)
}

return (
  <div><center>
    <h1>Vote for your Language !</h1>
    <ul>
    {languages.map((language, index) => (
      <li key={index} style={{listStyle:'none', border: '1px solid black', width:'200px', backgroundColor:'beige'}}>
      <h4>{language.votes} {language.name}  <button style={{color:'green', backgroundColor:'transparent', border:'none'}} onClick={()=>incrementVote(index)}>Click Here</button> </h4>
      </li>
    ))}
    </ul>
    </center>
  </div>
);
}

export default App;
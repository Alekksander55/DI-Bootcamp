import './App.css';
import Books from './components/Books.component';
import Header from './components/Header.component';
import BookList from './components/BookList.component';
import { createContext} from 'react'

function App() {
  return (
    <div className="App">
        <Header/>
        <Books/>
    </div>
  );
}

export default App;

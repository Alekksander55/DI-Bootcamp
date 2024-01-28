import './App.css';
import Counter from './component/Counter';
import {useState} from 'react'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  // const[count, setCount] = useState(0)
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
       <h1> Redux</h1>
       <Counter/>
      </header>
    </div>
    </Provider>
  );
}

export default App;

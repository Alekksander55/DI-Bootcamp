import './App.css';
import TodoList from './component/TodoList'
import {Provider} from 'react-redux'
import store from './redux/store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <TodoList/>
      </header>
    </div>
    </Provider>
  );
}

export default App;

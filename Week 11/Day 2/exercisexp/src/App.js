import UserList from './features/UserList';
import './App.css';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
      <UserList/>
      </header>
    </div>
  </Provider>
  );
}

export default App;

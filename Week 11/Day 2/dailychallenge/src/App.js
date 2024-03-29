import './App.css';
import AgeCounter from './features/AgeCounter';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
    <AgeCounter/>
      </header>
    </div>
    </Provider>
  );
}

export default App;

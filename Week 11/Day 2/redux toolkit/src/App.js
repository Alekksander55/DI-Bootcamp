import Counter from "./features/counter/Counter";
import "./App.css";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
    </Provider>
  );
}

export default App;

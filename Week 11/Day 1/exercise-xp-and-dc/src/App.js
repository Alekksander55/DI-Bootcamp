import "./App.css";
import TasksList from "./features/TasksList";
import store from "./app/store";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <TasksList />
      </header>
    </div>
    </Provider>
  );
}

export default App;

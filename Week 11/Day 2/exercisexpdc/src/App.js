import "./App.css";
import TodoList from "./features/todos/TodoList";
import { Provider } from "react-redux";
import store from "./app/app";
import Users from "./features/users/Users";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <TodoList />
          <Users/>
        </header>
      </div>
    </Provider>
  );
}

export default App;

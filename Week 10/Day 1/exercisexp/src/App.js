import "./App.css";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import { Color } from "./components/Color";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Color/>
      <p>Simulation 1</p>
        <ErrorBoundary>            
            <BuggyCounter />
            <BuggyCounter />
        </ErrorBoundary>
        <p>Simulation 2</p>
        <ErrorBoundary>            
            <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>            
            <BuggyCounter />
        </ErrorBoundary>
        <p>Simulation 3</p>
        <BuggyCounter />

      </header>
    </div>
  );
}

export default App;

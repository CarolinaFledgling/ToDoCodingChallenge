import "./App.css";
import { AddTask } from "./components/AddTask/AddTask";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>What needs to be done?</h2>
      </header>
      <section>
        <AddTask />
      </section>
    </div>
  );
}

export default App;

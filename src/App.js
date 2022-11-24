import "./App.css";
import React, { useReducer } from "react";
import { AddTask } from "./components/AddTask/AddTask";
import { reducerFn } from "./utility/reducer";

const initialState = { taskList: [] };

function App() {
  const [{ taskList }, dispatch] = useReducer(reducerFn, initialState);
  return (
    <div className="App">
      <header className="App-header">
        <h2>What needs to be done?</h2>
      </header>
      <section>
        <AddTask dispatch={dispatch} taskList={taskList} />
      </section>
    </div>
  );
}

export default App;

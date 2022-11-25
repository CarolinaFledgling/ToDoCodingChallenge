import "./App.css";
import React, { useReducer } from "react";
import { AddTask } from "./components/AddTask/AddTask";
import { Header } from "./components/Header/Header";
import { reducerFn } from "./utility/reducer";

const initialState = {
  taskList: [],
};

function App() {
  const [{ taskList }, dispatch] = useReducer(reducerFn, initialState);
  return (
    <div className="App">
      <Header/>
      <main>
        <AddTask dispatch={dispatch} taskList={taskList} />
      </main>
    </div>
  );
}

export default App;



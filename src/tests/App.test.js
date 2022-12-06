import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { AddTask } from "../components/AddTask/AddTask";

import { reducerFn } from "../utility/reducer";
import { v4 as uuidv4 } from "uuid";

test("renders the landing page", () => {
  render(<App />);
});

test("AddTask renders without crashing", () => {
  render(<AddTask />);
});

test("Form submission should not call add method if input field is empty", () => {
  render(<AddTask />);
  const btn = screen.getByText(/Add/i);
  fireEvent.click(btn);
});

test("adds a new task to the taskList", () => {
  const initialState = {
    taskList: [],
  };

  // dispatch an action to add a new task

  const action = {
    type: "NEW_TASK",
    name: "test task",
  };

  const result = reducerFn(initialState, action);

  expect(result.taskList).toHaveLength(1);
  expect(result.taskList[0].name).toEqual("test task");
  expect(result.taskList[0].id).toBeDefined();
});

test("delete task from the Task list", () => {
  const initialState = {
    taskList: [
      {
        id: uuidv4(),
        name: "Learn React",
        isCompleted: false,
      },
      {
        id: uuidv4(),
        name: "Learn Js",
        isCompleted: false,
      },
    ],
  };

  const action = {
    type: "DELETE_TASK",
    id: initialState.taskList[0].id,
  };

  const result = reducerFn(initialState, action);
  console.log("result", result);

  // function output
  expect(result.taskList).toHaveLength(1);
  expect(result.taskList[0].name).toEqual("Learn Js")
});

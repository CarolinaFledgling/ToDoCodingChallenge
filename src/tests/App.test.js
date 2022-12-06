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
  console.log("result", result);

  expect(result.taskList).toHaveLength(1);
  expect(result.taskList[0].name).toEqual("test task");
  expect(result.taskList[0].id).toBeDefined();
});

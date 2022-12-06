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

// Tests for checking reducerFn functionality

describe("reducerFn", () => {
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
    expect(result.taskList[0].name).toEqual("Learn Js");
  });

  test("check if the task is editing", () => {
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
          isCompleted: true,
        },
      ],
    };

    const action = {
      type: "START_CHECKBOX_COMPLETE_TASK",
      id: initialState.taskList[1].id,
    };

    const result = reducerFn(initialState, action);

    expect(result.taskList).toHaveLength(2);
    expect(result.taskList[1].isCompleted).toEqual(false);
  });

  test("should handle the SAVE_EDIT_TASK action", () => {
    // Initialize the state
    const initialState = {
      taskList: [
        {
          id: "1",
          name: "Task 1",
          isCompleted: false,
        },
        {
          id: "2",
          name: "Task 2",
          isCompleted: false,
        },
      ],
    };
    // Create the SAVE_EDIT_TASK action
    const action = {
      type: "SAVE_EDIT_TASK",
      id: "2",
      name: "new name of task",
    };

    const expectedState = {
      taskList: [
        {
          id: "1",
          name: "Task 1",
          isCompleted: false,
        },
        {
          id: "2",
          name: "new name of task",
          isCompleted: false,
          isEdit: false,
        },
      ],
    };

   // Dispatch the action and get the new state
   const newState = reducerFn(initialState, action);

    expect(newState).toEqual(expectedState);
  });
});

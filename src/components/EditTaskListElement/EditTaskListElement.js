import React, { useState } from "react";
import { Button } from "../UI/Button/Button";
import styled from "./EditTaskListElement.module.css";

export const EditTaskListElement = React.memo(({ task, dispatch }) => {
  const [enteredSaveNameTask, setEnteredSaveNameTask] = useState(task.name);

  const saveTaskHandler = (e) => {
    e.preventDefault();

    dispatch({
      type: "SAVE_EDIT_TASK",
      name: enteredSaveNameTask,
      id: task.id,
    });
  };

  const taskNameChangeHandler = (e) => {
    setEnteredSaveNameTask(e.target.value);
  };

  return (
    <form className={styled.form}>
      <div className={styled.inputGroup}>
        <label htmlFor="taskName">Task Name:</label>
        <input
          id="taskName"
          type="text"
          value={enteredSaveNameTask}
          onChange={taskNameChangeHandler}
        />
      </div>
      <Button onClick={saveTaskHandler}>Confirm</Button>
    </form>
  );
});

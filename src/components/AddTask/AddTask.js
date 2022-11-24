import React, { useState } from "react";
import { Button } from "../UI/Button/Button";
import { Card } from "../UI/Card/Card";
import { Wrapper } from "../UI/Wrapper/Wrapper";

export const AddTask = () => {
  const [enteredTask, setEnteredTask] = useState("");

  const addTaskHandler = (e) => {
    e.preventDefault();
    console.log(enteredTask)
  };

  const userTaskChangeHandler = (e) => {
    setEnteredTask(e.target.value);
    console.log("task:", enteredTask)
  };
  return (
    <Wrapper>
      <Card>
        <form onSubmit={addTaskHandler} autoComplete="off">
          <label htmlFor="task">Task name:</label>
          <input
            id="task"
            type="text"
            value={enteredTask}
            onChange={userTaskChangeHandler}
          />
          <Button type="submit">Add Task</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

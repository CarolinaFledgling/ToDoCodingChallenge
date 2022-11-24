import React, { useState } from "react";
import { Button } from "../UI/Button/Button";
import { Card } from "../UI/Card/Card";
import { Wrapper } from "../UI/Wrapper/Wrapper";
import styled from "./AddTask.module.css";

export const AddTask = () => {
  const [enteredTask, setEnteredTask] = useState("");
  const [error, setError] = useState("");

  const addTaskHandler = (e) => {
    e.preventDefault();

    if (enteredTask.trim().length === 0 || enteredTask.trim().length <= 3) {
      setError({
        title: "We have a error:",
        message: "Please enter task, more than 3 letters",
      });
      return;
    }

    console.log(enteredTask);
    setEnteredTask("");
    setError("");
  };

  const userTaskChangeHandler = (e) => {
    setEnteredTask(e.target.value);
    console.log("task:", enteredTask);
  };
  return (
    <Wrapper>
      <Card>
        <form
          className={styled.form}
          onSubmit={addTaskHandler}
          autoComplete="off"
        >
          <label className={styled.label} htmlFor="task">
            Task name:
          </label>
          <input
            className={styled.input}
            id="task"
            type="text"
            value={enteredTask}
            onChange={userTaskChangeHandler}
          />
          {error && (
            <p className={styled.error}>
              {error.title} {error.message}
            </p>
          )}
          <Button type="submit">Add Task</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

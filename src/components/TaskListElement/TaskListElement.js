import React from "react";
import { Button } from "../UI/Button/Button";
import styled from "./TaskListElement.module.css";

export const TaskListElement = ({ task, dispatch }) => {
  return (
    <div className={styled.wrapperElement}>
      <li className={styled.taskName}>{task.name}</li>
      <div className={styled.btnGroup}>
        <Button onClick={() => dispatch({ type: "DELETE_TASK", id: task.id })}>
          Delete
        </Button>
        <Button
          className={styled.editBtn}
          onClick={() => dispatch({ type: "START_EDIT_TASK", id: task.id })}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

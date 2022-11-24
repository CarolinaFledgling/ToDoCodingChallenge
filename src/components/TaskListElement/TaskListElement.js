import React from "react";
import { Button } from "../UI/Button/Button";
import styled from "./TaskListElement.module.css";

export const TaskListElement = ({ task, dispatch }) => {
  return (
    <li className={styled.wrapperElement}>
      <span>{task.name}</span>
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "auto" }}
      >
        <Button onClick={() => dispatch({ type: "DELETE_TASK", id: task.id })}>
          Delete
        </Button>
        <Button
          onClick={() => dispatch({ type: "START_EDIT_TASK", id: task.id })}
        >
          Edit
        </Button>
      </div>
    </li>
  );
};


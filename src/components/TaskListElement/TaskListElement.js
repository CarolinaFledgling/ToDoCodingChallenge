import React from "react";
import { Button } from "../UI/Button/Button";
import styled from "./TaskListElement.module.css";

export const TaskListElement = ({ task, dispatch }) => {
  //console.log("task", task);
  return (
    <div className={styled.wrapperElement}>
      <div className={styled.element}>
        <input
          className={styled.input}
          type="checkbox"
          onChange={() =>
            dispatch({ type: "START_CHECKBOX_COMPLETE_TASK", id: task.id })
          }
        />
        <li
          className={
            task.isCompleted ? styled.taskNameCompleted : styled.taskName
          }
        >
          {task.name}
        </li>
        {task.isCompleted ? <span className={styled.span}>Done</span> : ""}
      </div>

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

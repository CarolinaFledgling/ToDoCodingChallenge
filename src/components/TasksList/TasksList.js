import React from "react";
import { EditTaskListElement } from "../EditTaskListElement/EditTaskListElement";
import { TaskListElement } from "../TaskListElement/TaskListElement";
import { Card } from "../UI/Card/Card";
import styled from "./TasksList.module.css";

export const TasksList = React.memo(({ taskList, dispatch }) => {
  return (
    <>
      <Card className={styled.tasks}>
        <ul>
          {taskList
            ?.slice()
            .reverse()
            .map((task) => {
              return task.isEdit ? (
                <EditTaskListElement
                  key={`task-${task.id}`}
                  task={task}
                  dispatch={dispatch}
                />
              ) : (
                <TaskListElement
                  key={task.id}
                  task={task}
                  dispatch={dispatch}
                />
              );
            })}
        </ul>
      </Card>
    </>
  );
});

import React from "react";
import { TaskListElement } from "../TaskListElement/TaskListElement";
import { Card } from "../UI/Card/Card";
import styled from "./TasksList.module.css";

export const TasksList = React.memo(({ taskList, dispatch }) => {

  return (
    <>
      <Card className={styled.tasks}>
        {taskList.length === 0 ? (
          ""
        ) : (
          <ul>
            {taskList.map((task) => {
              return (
                <TaskListElement
                  key={task.id}
                  task={task}
                  dispatch={dispatch}
                />
              );
            })}
          </ul>
        )}
      </Card>
    </>
  );
});

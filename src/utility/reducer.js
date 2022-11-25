import { v4 as uuidv4 } from "uuid";

export function reducerFn(latestState, actionDispatched) {
  if (actionDispatched.type === "NEW_TASK") {
    const newTask = {
      id: uuidv4(),
      name: actionDispatched.name,
      isCompleted: false,
    };
    return { ...latestState, taskList: [...latestState.taskList, newTask] };
  }

  if (actionDispatched.type === "DELETE_TASK") {
    const filteredTask = latestState.taskList.filter((task) => {
      return task.id !== actionDispatched.id;
    });

    return { ...latestState, taskList: filteredTask };
  }

  if (actionDispatched.type === "START_EDIT_TASK") {
    const newListTasks = latestState.taskList.map((task) => {
      if (task.id === actionDispatched.id) {
        return {
          ...task,
          isEdit: true,
          isCompleted: false,
        };
      }
      return task;
    });

    return { ...latestState, taskList: newListTasks };
  }

  if (actionDispatched.type === "SAVE_EDIT_TASK") {
    // console.log('action task', actionDispatched)
    const newListTasks = latestState.taskList.map((task) => {
      if (task.id === actionDispatched.id) {
        // console.log('edit task', task)
        return {
          ...task,
          name: actionDispatched.name,
          isEdit: false,
          isCompleted: false,
        };
      }

      return task;
    });

    return { ...latestState, taskList: newListTasks };
  }
  // throw new Error();
  return latestState;
}

import { v4 as uuidv4 } from "uuid";

export function reducerFn(latestState, actionDispatched) {
  if (actionDispatched.type === "NEW_TASK") {
    const newTask = {
      id: uuidv4(),
      name: actionDispatched.name,
      isCheckBox: false,
    };
    return { ...latestState, taskList: [...latestState.taskList, newTask] };
  }

  if (actionDispatched.type === "DELETE_TASK") {
    const filteredTask = latestState.taskList.filter((task) => {
      return task.id !== actionDispatched.id;
    });

    return { ...latestState, taskList: filteredTask };
  }

  // throw new Error();
  return latestState;
}

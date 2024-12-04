import React, { useMemo } from "react";
import { useAtomSelector } from "reactjs-statify";
import { tasksAtom } from "../state-management/task";
import { TaskFilterStatus } from "../types/task";
import TaskFilter from "./TaskFilter";

const TaskFilterContainer = () => {
  const filterValue = useAtomSelector({ atom: tasksAtom, props: "filter" });
  const tasks = useAtomSelector({ atom: tasksAtom, props: "tasks" });
  const remainingTasks = useMemo(() => {
    return tasksAtom
      .get("tasks")
      .filter((task) => task.status === "inprogress");
  }, [tasks]);

  console.log("Filter Rerender");

  const handleOnChangeFilter = (value: TaskFilterStatus) => {
    tasksAtom.set("filter", value);
  };

  const handleOnClearTasks = () => {
    tasksAtom.reset({});
  };

  return (
    <>
      <p className=" text-gray-500 px-2 py-3">
        {remainingTasks.length} tasks left{" "}
      </p>
      <TaskFilter onChange={handleOnChangeFilter} value={filterValue} />
      <button onClick={handleOnClearTasks}>Clear all tasks</button>
    </>
  );
};

export default TaskFilterContainer;

import React from "react";
import AddTaskForm from "./AddTaskForm";
import { Task } from "../types/task";
import { tasksAtom } from "../state-management/task";

function AddTaskFormContainer() {
  const handleOnAddTask = (title: string) => {
    const newTask: Task = { id: Date.now(), title, status: "inprogress" };
    tasksAtom.set("tasks", (prev) => [...prev, newTask]);
  };

  console.log("AddTaskForm Rerender");

  return <AddTaskForm onAddTask={handleOnAddTask} />;
}

export default AddTaskFormContainer;

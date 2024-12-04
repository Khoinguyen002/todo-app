import React from "react";
import AddTaskForm from "./AddTaskForm";
import { Task } from "../types/task";
import { tasksAtom } from "../state-management/task";
import { db } from "../config/firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

function AddTaskFormContainer() {
  const handleOnAddTask = (title: string) => {
    console.log(db.app);

    getDocs(collection(db, "todo")).then((res) => {
      console.log(res.docs);
    });

    const newTask: Task = { id: Date.now(), title, status: "inprogress" };
    setDoc(doc(collection(db, "todo"), newTask.id.toString()), newTask);
    tasksAtom.set("tasks", (prev) => [...prev, newTask]);
  };

  console.log("AddTaskForm Rerender");

  return <AddTaskForm onAddTask={handleOnAddTask} />;
}

export default AddTaskFormContainer;

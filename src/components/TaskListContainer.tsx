import React, { useEffect, useMemo } from "react";
import { useAtomSelector } from "reactjs-statify";
import { tasksAtom } from "../state-management/task";
import TaskList from "./TaskList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { Task } from "../types/task";

const TaskListContainer = () => {
  const tasks = useAtomSelector({ atom: tasksAtom, props: "tasks" });
  const filter = useAtomSelector({ atom: tasksAtom, props: "filter" });
  const filteredTasks = useMemo(() => {
    return filter === "all"
      ? tasks
      : tasks.filter((task) => task.status === filter);
  }, [tasks, filter]);

  const onEditTask = (id: number, title: string) => {
    tasksAtom.set("tasks", (prev) =>
      prev.map((task) => (task.id === id ? { ...task, title } : task))
    );
  };
  const onDeleteTask = (id: number) => {
    tasksAtom.set("tasks", (prev) => prev.filter((task) => task.id !== id));
  };
  const onToggleCompleted = (id: number) => {
    tasksAtom.set("tasks", (prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "completed" ? "inprogress" : "completed",
            }
          : task
      )
    );
  };

  useEffect(() => {
    getDocs(collection(db, "todo")).then((res) => {
      const tasks = res.docs.map((doc) => {
        return doc.data();
      });
      console.log(tasks);

      tasksAtom.set("tasks", tasks as Task[]);
    });
  }, []);

  console.log("TaskList Rerender");

  return filteredTasks.length ? (
    <TaskList
      tasks={filteredTasks}
      onEditTask={onEditTask}
      onDeleteTask={onDeleteTask}
      onToggleCompleted={onToggleCompleted}
    />
  ) : (
    <div className=" w-full h-[80%] flex items-center justify-center overflow-hidden">
      <p className=" text-gray-500 text-center z-10">Empty task</p>
    </div>
  );
};

export default TaskListContainer;

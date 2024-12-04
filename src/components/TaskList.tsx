import React from "react";
import Task from "./Task";
import { Task as TaskType } from "../types/task";

const TaskList = ({
  tasks,
  onEditTask,
  onDeleteTask,
  onToggleCompleted,
}: {
  tasks: TaskType[];
  onEditTask: (id: number, title: string) => void;
  onDeleteTask: (id: number) => void;
  onToggleCompleted: (id: number) => void;
}) => {
  const reversedTasks = tasks.slice().reverse();
  return (
    <ul className=" ">
      {reversedTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onToggleCompleted={onToggleCompleted}
        />
      ))}
    </ul>
  );
};

export default TaskList;

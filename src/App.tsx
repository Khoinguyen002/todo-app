import React, { useState, useEffect, useMemo } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { MdDarkMode, MdSunny } from "react-icons/md";
import TaskFilter from "./components/TaskFilter";
import useTheme from "./hooks/useTheme";
import { Task, TaskFilterStatus, TaskStatus } from "./types/task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<TaskFilterStatus>("all");
  const { setTypeOfTheme, themeState } = useTheme();

  const addTask = (title: string) => {
    const newTask: Task = { id: Date.now(), title, status: "inprogress" };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id: number, title: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "completed" ? "inprogress" : "completed",
            }
          : task
      )
    );
  };

  const clearTasks = () => {
    setTasks([]);
  };

  // const getCompletedTasks = () => tasks.filter((task) => task.completed);
  // const getRemainingTasks = () => tasks.filter((task) => !task.completed);

  const toggleTheme = () => {
    setTypeOfTheme(themeState.themeType === "dark" ? "light" : "dark");
  };

  const { filteredTasks, remainingTasks } = useMemo(() => {
    const remainingTasks: Task[] = [];
    const filteredTasks: Task[] = [];

    tasks.forEach((task) => {
      if (task.status === "inprogress") {
        remainingTasks.push(task);
      }
      if (task.status === selectedStatus) {
        filteredTasks.push(task);
      }
    });

    return {
      filteredTasks: selectedStatus === "all" ? tasks : filteredTasks,
      remainingTasks,
    };
  }, [tasks, selectedStatus]);

  return (
    <div
      className={`hero ${themeState.backgroundPrimaryColor} h-screen md:min-h-[700px]  w-full m-auto flex flex-col items-center mt-14 transition-all`}
    >
      <div
        className={`flex flex-col space-y-6 w-[600px] md:w-[100%] z-10 p-4 ${themeState.textPrimaryColor}`}
      >
        <div className=" w-full flex items-center justify-between">
          <h1 className=" uppercase text-4xl font-bold text-white tracking-widest mb-4 md:text-3xl">
            {/* Task Manager */}
            My Tasks
          </h1>

          {themeState.themeType === "dark" ? (
            <MdSunny
              onClick={toggleTheme}
              className={`bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg  bottom-5 right-5 ${themeState.textPrimaryColor}`}
              size={32}
            />
          ) : (
            <MdDarkMode
              onClick={toggleTheme}
              className={`bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg  bottom-5 right-5 ${themeState.textPrimaryColor}`}
              size={32}
            />
          )}
        </div>
        <div className=" shadow-md">
          <AddTaskForm onAddTask={addTask} />
        </div>
        <div
          className={`scroll ${themeState.backgroundPrimaryLightColor} w-full h-[400px] md:h-[500px] px-2 overflow-y-scroll rounded-md shadow-lg relative transition-all`}
        >
          <div
            className={`w-full overflow-hidden mb- sticky top-0 ${themeState.backgroundPrimaryLightColor} flex items-center justify-between text-gray-500 border-b transition-all py-1`}
          >
            <p className=" text-gray-500 px-2 py-3">
              {remainingTasks.length} tasks left{" "}
            </p>
            <TaskFilter value={selectedStatus} onChange={setSelectedStatus} />
            <button onClick={clearTasks}>Clear all tasks</button>
          </div>

          {filteredTasks.length ? (
            <TaskList
              tasks={filteredTasks}
              onEditTask={editTask}
              onDeleteTask={deleteTask}
              onToggleCompleted={toggleCompleted}
            />
          ) : (
            <div className=" w-full h-[80%] flex items-center justify-center overflow-hidden">
              <p className=" text-gray-500 text-center z-10">Empty task</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import AddTaskFormContainer from "./components/AddTaskFormContainer";
import TaskFilterContainer from "./components/TaskFilterContainer";
import TaskListContainer from "./components/TaskListContainer";
import ThemeToggleButton from "./components/ThemeToggleButton";
import useTheme from "./hooks/useTheme";
import Header from "./components/Header";

function App() {
  const { themeState } = useTheme();

  console.log("App Rerender");

  return (
    <>
      <Header />
      <div
        className={`relative ${themeState.backgroundPrimaryColor} h-screen md:min-h-[700px]  w-full m-auto flex flex-col items-center transition-all`}
      >
        <div
          className={`hero flex flex-col space-y-6 w-[600px] md:w-[100%] z-10 p-4 ${themeState.textPrimaryColor} mt-10`}
        >
          <div className=" w-full flex items-center justify-between">
            <h1 className=" uppercase text-4xl font-bold text-white tracking-widest mb-4 md:text-3xl">
              My Tasks
            </h1>
            <ThemeToggleButton />
          </div>
          <div className=" shadow-md">
            <AddTaskFormContainer />
          </div>
          <div
            className={`scroll ${themeState.backgroundPrimaryLightColor} w-full h-[400px] md:h-[500px] px-2 overflow-y-scroll rounded-md shadow-lg relative transition-all`}
          >
            <div
              className={`w-full overflow-hidden mb- sticky top-0 ${themeState.backgroundPrimaryLightColor} flex items-center justify-between text-gray-500 border-b transition-all py-1`}
            >
              <TaskFilterContainer />
            </div>
            <TaskListContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

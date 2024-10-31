import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import useTheme from "../hooks/useTheme";

const AddTaskForm = ({ onAddTask }: { onAddTask: (title: string) => void }) => {
  const [title, setTitle] = useState("");
  const { themeState } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim());
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`${themeState.backgroundPrimaryLightColor} w-full  flex space-x-2 items-center  rounded-lg px-4 transition-all`}
      >
        <CiCirclePlus size={28} className="px-0 text-gray-500" />
        <input
          className=" bg-transparent w-full h-fit p-1 py-4 text-lg "
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className=" px-4 uppercase text-gray-500" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;

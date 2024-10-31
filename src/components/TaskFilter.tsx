import React from "react";
import { filterOptions } from "../data/taskFilterOptions";
import useTheme from "../hooks/useTheme";
import { TaskFilterStatus, TaskStatus } from "../types/task";

const TaskFilter = ({
  value,
  onChange,
}: {
  value: TaskFilterStatus;
  onChange: (status: TaskFilterStatus) => void;
}) => {
  const {
    themeState: { backgroundPrimaryLightColor, textPrimaryColor },
  } = useTheme();

  return (
    <form className="max-w-sm mx-auto">
      <select
        value={value}
        onChange={(e) => {
          onChange(e.target.value as TaskStatus);
        }}
        className={`${backgroundPrimaryLightColor} ${textPrimaryColor} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all`}
      >
        {filterOptions.map((option) => {
          return (
            <option
              value={option.value}
              key={option.value}
              className={`${backgroundPrimaryLightColor} ${textPrimaryColor}`}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default TaskFilter;

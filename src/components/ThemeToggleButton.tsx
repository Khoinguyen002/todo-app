import React from "react";
import useTheme from "../hooks/useTheme";
import { MdDarkMode, MdSunny } from "react-icons/md";

function ThemeToggleButton(props: {}) {
  const { setTypeOfTheme, themeState } = useTheme();

  const handleToggleTheme = () => {
    setTypeOfTheme(themeState.themeType === "dark" ? "light" : "dark");
  };

  return themeState.themeType === "dark" ? (
    <MdSunny
      onClick={handleToggleTheme}
      className={`bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg  bottom-5 right-5 ${themeState.textPrimaryColor}`}
      size={32}
    />
  ) : (
    <MdDarkMode
      onClick={handleToggleTheme}
      className={`bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg  bottom-5 right-5 ${themeState.textPrimaryColor}`}
      size={32}
    />
  );
}

export default ThemeToggleButton;

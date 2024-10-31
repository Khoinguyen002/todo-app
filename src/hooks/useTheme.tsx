import { useContext } from "react";
import { themeContext } from "../context/themeContext";

const useTheme = () => {
  const { setTypeOfTheme, themeState } = useContext(themeContext);

  return { setTypeOfTheme, themeState };
};

export default useTheme;

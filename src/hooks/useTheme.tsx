import { useAtomSelector } from "reactjs-statify";
import { themeAtom } from "../state-management/theme";
import { ThemeType } from "../types/theme";
import { themeStateByTypeCollection } from "../data/theme";

const useTheme = () => {
  const themeState = useAtomSelector({ atom: themeAtom, props: "themeState" });

  const setTypeOfTheme = (type: ThemeType) => {
    themeAtom.set("themeState", themeStateByTypeCollection[type]);
  };

  return { setTypeOfTheme, themeState };
};

export default useTheme;

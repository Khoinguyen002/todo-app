import { createAtom } from "reactjs-statify";
import { defaultThemeState } from "../../data/theme";
import { ThemeContext } from "../../types/theme";

export const themeAtom = createAtom<"theme", ThemeContext>("theme", {
  themeState: defaultThemeState,
});

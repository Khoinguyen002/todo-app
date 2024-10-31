import { createContext, PropsWithChildren, useState } from "react";

import React from "react";
import { defaultThemeState, themeStateByTypeCollection } from "../data/theme";
import { ThemeContext, ThemeState, ThemeType } from "../types/theme";

export const themeContext = createContext<ThemeContext>({
  themeState: defaultThemeState,
  setTypeOfTheme: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [themeState, setThemeState] = useState<ThemeState>(defaultThemeState);

  const setTypeOfTheme = (type: ThemeType) => {
    setThemeState(themeStateByTypeCollection[type]);
  };

  return (
    <themeContext.Provider value={{ setTypeOfTheme, themeState }}>
      {children}
    </themeContext.Provider>
  );
};

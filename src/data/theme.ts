import { ThemeState, ThemeType } from "../types/theme";

export const themeStateByTypeCollection: Record<ThemeType, ThemeState> = {
  dark: {
    backgroundPrimaryColor: "transition-all bg-gray-900",
    textPrimaryColor: "transition-all text-white",
    backgroundPrimaryLightColor: "transition-all bg-gray-800",
    textPrimaryLightColor: "transition-all text-gray-50",
    themeType: "dark",
  },
  light: {
    backgroundPrimaryColor: "transition-all bg-gray-100",
    textPrimaryColor: "transition-all text-black",
    backgroundPrimaryLightColor: "transition-all bg-gray-50",
    textPrimaryLightColor: "transition-all text-gray-500",
    themeType: "light",
  },
};

export const defaultThemeState: ThemeState = {
  backgroundPrimaryColor: "transition-all bg-gray-100",
  textPrimaryColor: "transition-all text-black",
  backgroundPrimaryLightColor: "transition-all bg-gray-50",
  textPrimaryLightColor: "transition-all text-gray-500",
  themeType: "light",
};

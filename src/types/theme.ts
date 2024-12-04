export type ThemeContext = {
  themeState: ThemeState;
};

export type ThemeState = {
  backgroundPrimaryColor: string;
  backgroundPrimaryLightColor: string;
  textPrimaryColor: string;
  textPrimaryLightColor: string;
  themeType: ThemeType;
};

export type ThemeType = "light" | "dark";

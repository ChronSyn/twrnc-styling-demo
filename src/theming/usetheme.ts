import { createContext } from "react";
import { EThemeName, IBaseLayout, RTheme } from "@Themes/interfaces";
import { Theme as DefaultTheme } from "@Themes/themes/default.theme";
import { Theme as AlternateTheme } from "@Themes/themes/alternate.theme";

export const Themes: RTheme = {
  [EThemeName.Default]: DefaultTheme,
  [EThemeName.Alternate]: AlternateTheme,
};

export const ThemeProviderDefaultProps = {
  theme: Themes[EThemeName.Default],
  setTheme: (theme: IBaseLayout) => {},
};

export const ThemeContext = createContext(ThemeProviderDefaultProps);

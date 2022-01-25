import tw from "twrnc";
import { EThemeName, IBaseLayout, IColors } from "@Themes/interfaces";
import { Theme as BaseLayout } from "@Themes/Layout";

export const Colors: IColors = {
  __THEMENAME: EThemeName.Alternate,
  background: {
    primary: tw`bg-pink-800`,
    secondary: tw`bg-yellow-200`,
    tertiary: tw`bg-green-400`,
    error: tw`bg-red-800`,
    success: tw`bg-green-900`,
    warning: tw`bg-red-600`,
    info: tw`bg-blue-400`,
    light: tw`bg-white`,
    dark: tw`bg-gray-800`,
  },
  font: {
    primary: tw`text-pink-800`,
    secondary: tw`text-yellow-200`,
    tertiary: tw`text-green-400`,
    error: tw`text-red-800`,
    success: tw`text-green-900`,
    warning: tw`text-red-600`,
    info: tw`text-blue-400`,
    light: tw`text-white`,
    dark: tw`text-gray-800`,
  },
};

export const Theme: IBaseLayout = BaseLayout(Colors);

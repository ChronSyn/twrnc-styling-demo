import tw from "twrnc";
import { EThemeName, IBaseLayout, IColors } from "@Themes/interfaces";
import { Theme as BaseLayout } from "@Themes/Layout";

export const Colors: IColors = {
  __THEMENAME: EThemeName.Default,
  background: {
    primary: tw`bg-purple-800`,
    secondary: tw`bg-yellow-400`,
    tertiary: tw`bg-green-800`,
    error: tw`bg-red-800`,
    success: tw`bg-green-600`,
    warning: tw`bg-red-600`,
    info: tw`bg-blue-800`,
    light: tw`bg-white`,
    dark: tw`bg-gray-800`,
  },
  font: {
    primary: tw`text-purple-800`,
    secondary: tw`text-yellow-400`,
    tertiary: tw`text-green-800`,
    error: tw`text-red-800`,
    success: tw`text-green-600`,
    warning: tw`text-red-600`,
    info: tw`text-blue-800`,
    light: tw`text-white`,
    dark: tw`text-gray-800`,
  },
};

export const Theme: IBaseLayout = BaseLayout(Colors);

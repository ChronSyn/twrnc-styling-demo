import { StyleProp, ViewStyle, TextStyle } from "react-native";

interface IBaseColors<T = StyleProp<ViewStyle> | StyleProp<TextStyle>> {
  primary: T;
  secondary: T;
  tertiary: T;
  error: T;
  success: T;
  warning: T;
  info: T;
  light: T;
  dark: T;
}

export enum EThemeName {
  Default = "default",
  Alternate = "alternate",
}

export interface IColors {
  __THEMENAME: EThemeName;
  background: IBaseColors<StyleProp<ViewStyle>>;
  font: IBaseColors<StyleProp<TextStyle>>;
}

export interface IBaseLayout {
  __THEMENAME: EThemeName;
  width: {
    full: StyleProp<ViewStyle>;
    half: StyleProp<ViewStyle>;
    quarter: StyleProp<ViewStyle>;
  };
  height: {
    full: StyleProp<ViewStyle>;
    half: StyleProp<ViewStyle>;
    quarter: StyleProp<ViewStyle>;
  };
  flex: {
    flex: StyleProp<ViewStyle>;
    grow: StyleProp<ViewStyle>;
    shrink: StyleProp<ViewStyle>;
    direction: {
      row: StyleProp<ViewStyle>;
      column: StyleProp<ViewStyle>;
    };
    wrap: StyleProp<ViewStyle>;
    alignItems: {
      start: StyleProp<ViewStyle>;
      center: StyleProp<ViewStyle>;
      end: StyleProp<ViewStyle>;
    };
    alignContent: {
      start: StyleProp<ViewStyle>;
      center: StyleProp<ViewStyle>;
      end: StyleProp<ViewStyle>;
    };
    justifyContent: {
      start: StyleProp<ViewStyle>;
      center: StyleProp<ViewStyle>;
      end: StyleProp<ViewStyle>;
      between: StyleProp<ViewStyle>;
      evenly: StyleProp<ViewStyle>;
    };
    basis: {
      half: StyleProp<ViewStyle>;
      quarter: StyleProp<ViewStyle>;
      third: StyleProp<ViewStyle>;
      threeQuarters: StyleProp<ViewStyle>;
    };
    alignSelf: {
      start: StyleProp<ViewStyle>;
      center: StyleProp<ViewStyle>;
      end: StyleProp<ViewStyle>;
    };
  };
  padding: {
    top: {
      none: StyleProp<ViewStyle>;
      xxxsmall: StyleProp<ViewStyle>;
      xxsmall: StyleProp<ViewStyle>;
      xsmall: StyleProp<ViewStyle>;
      small: StyleProp<ViewStyle>;
      medium: StyleProp<ViewStyle>;
      large: StyleProp<ViewStyle>;
      xlarge: StyleProp<ViewStyle>;
      xxlarge: StyleProp<ViewStyle>;
      xxxlarge: StyleProp<ViewStyle>;
    };
    right: {
      none: StyleProp<ViewStyle>;
      xxxsmall: StyleProp<ViewStyle>;
      xxsmall: StyleProp<ViewStyle>;
      xsmall: StyleProp<ViewStyle>;
      small: StyleProp<ViewStyle>;
      medium: StyleProp<ViewStyle>;
      large: StyleProp<ViewStyle>;
      xlarge: StyleProp<ViewStyle>;
      xxlarge: StyleProp<ViewStyle>;
      xxxlarge: StyleProp<ViewStyle>;
    };
    bottom: {
      none: StyleProp<ViewStyle>;
      xxxsmall: StyleProp<ViewStyle>;
      xxsmall: StyleProp<ViewStyle>;
      xsmall: StyleProp<ViewStyle>;
      small: StyleProp<ViewStyle>;
      medium: StyleProp<ViewStyle>;
      large: StyleProp<ViewStyle>;
      xlarge: StyleProp<ViewStyle>;
      xxlarge: StyleProp<ViewStyle>;
      xxxlarge: StyleProp<ViewStyle>;
    };
    left: {
      none: StyleProp<ViewStyle>;
      xxxsmall: StyleProp<ViewStyle>;
      xxsmall: StyleProp<ViewStyle>;
      xsmall: StyleProp<ViewStyle>;
      small: StyleProp<ViewStyle>;
      medium: StyleProp<ViewStyle>;
      large: StyleProp<ViewStyle>;
      xlarge: StyleProp<ViewStyle>;
      xxlarge: StyleProp<ViewStyle>;
      xxxlarge: StyleProp<ViewStyle>;
    };
    all: {
      none: StyleProp<ViewStyle>;
      xxxsmall: StyleProp<ViewStyle>;
      xxsmall: StyleProp<ViewStyle>;
      xsmall: StyleProp<ViewStyle>;
      small: StyleProp<ViewStyle>;
      medium: StyleProp<ViewStyle>;
      large: StyleProp<ViewStyle>;
      xlarge: StyleProp<ViewStyle>;
      xxlarge: StyleProp<ViewStyle>;
      xxxlarge: StyleProp<ViewStyle>;
    };
    horizontal: {
      none: StyleProp<ViewStyle>;
      xxxsmall: StyleProp<ViewStyle>;
      xxsmall: StyleProp<ViewStyle>;
      xsmall: StyleProp<ViewStyle>;
      small: StyleProp<ViewStyle>;
      medium: StyleProp<ViewStyle>;
      large: StyleProp<ViewStyle>;
      xlarge: StyleProp<ViewStyle>;
      xxlarge: StyleProp<ViewStyle>;
      xxxlarge: StyleProp<ViewStyle>;
    };
    vertical: {
      none: StyleProp<ViewStyle>;
      xxxsmall: StyleProp<ViewStyle>;
      xxsmall: StyleProp<ViewStyle>;
      xsmall: StyleProp<ViewStyle>;
      small: StyleProp<ViewStyle>;
      medium: StyleProp<ViewStyle>;
      large: StyleProp<ViewStyle>;
      xlarge: StyleProp<ViewStyle>;
      xxlarge: StyleProp<ViewStyle>;
      xxxlarge: StyleProp<ViewStyle>;
    };
  };
  margin: {
    top: {
      none: StyleProp<ViewStyle>;
      xxxsmall: StyleProp<ViewStyle>;
      xxsmall: StyleProp<ViewStyle>;
      xsmall: StyleProp<ViewStyle>;
      small: StyleProp<ViewStyle>;
      medium: StyleProp<ViewStyle>;
      large: StyleProp<ViewStyle>;
      xlarge: StyleProp<ViewStyle>;
      xxlarge: StyleProp<ViewStyle>;
      xxxlarge: StyleProp<ViewStyle>;
    };
    right: {
      none: StyleProp<ViewStyle>;
      xxxsmall: StyleProp<ViewStyle>;
      xxsmall: StyleProp<ViewStyle>;
      xsmall: StyleProp<ViewStyle>;
      small: StyleProp<ViewStyle>;
      medium: StyleProp<ViewStyle>;
      large: StyleProp<ViewStyle>;
      xlarge: StyleProp<ViewStyle>;
      xxlarge: StyleProp<ViewStyle>;
      xxxlarge: StyleProp<ViewStyle>;
    };
    bottom: {
      none: StyleProp<ViewStyle>;
      xxxsmall: StyleProp<ViewStyle>;
      xxsmall: StyleProp<ViewStyle>;
      xsmall: StyleProp<ViewStyle>;
      small: StyleProp<ViewStyle>;
      medium: StyleProp<ViewStyle>;
      large: StyleProp<ViewStyle>;
      xlarge: StyleProp<ViewStyle>;
      xxlarge: StyleProp<ViewStyle>;
      xxxlarge: StyleProp<ViewStyle>;
    };
    left: {
      none: StyleProp<ViewStyle>;
      xxxsmall: StyleProp<ViewStyle>;
      xxsmall: StyleProp<ViewStyle>;
      xsmall: StyleProp<ViewStyle>;
      small: StyleProp<ViewStyle>;
      medium: StyleProp<ViewStyle>;
      large: StyleProp<ViewStyle>;
      xlarge: StyleProp<ViewStyle>;
      xxlarge: StyleProp<ViewStyle>;
      xxxlarge: StyleProp<ViewStyle>;
    };
    all: {
      none: StyleProp<ViewStyle>;
      xxxsmall: StyleProp<ViewStyle>;
      xxsmall: StyleProp<ViewStyle>;
      xsmall: StyleProp<ViewStyle>;
      small: StyleProp<ViewStyle>;
      medium: StyleProp<ViewStyle>;
      large: StyleProp<ViewStyle>;
      xlarge: StyleProp<ViewStyle>;
      xxlarge: StyleProp<ViewStyle>;
      xxxlarge: StyleProp<ViewStyle>;
    };
    horizontal: {
      none: StyleProp<ViewStyle>;
      xxxsmall: StyleProp<ViewStyle>;
      xxsmall: StyleProp<ViewStyle>;
      xsmall: StyleProp<ViewStyle>;
      small: StyleProp<ViewStyle>;
      medium: StyleProp<ViewStyle>;
      large: StyleProp<ViewStyle>;
      xlarge: StyleProp<ViewStyle>;
      xxlarge: StyleProp<ViewStyle>;
      xxxlarge: StyleProp<ViewStyle>;
    };
    vertical: {
      none: StyleProp<ViewStyle>;
      xxxsmall: StyleProp<ViewStyle>;
      xxsmall: StyleProp<ViewStyle>;
      xsmall: StyleProp<ViewStyle>;
      small: StyleProp<ViewStyle>;
      medium: StyleProp<ViewStyle>;
      large: StyleProp<ViewStyle>;
      xlarge: StyleProp<ViewStyle>;
      xxlarge: StyleProp<ViewStyle>;
      xxxlarge: StyleProp<ViewStyle>;
    };
  };
  colors: {
    background: IBaseColors<StyleProp<ViewStyle>>;
  };
  font: {
    colors: IBaseColors<StyleProp<TextStyle>>;
    size: {
      xsmall: StyleProp<TextStyle>;
      small: StyleProp<TextStyle>;
      medium: StyleProp<TextStyle>;
      large: StyleProp<TextStyle>;
      xlarge: StyleProp<TextStyle>;
    };
    weight: {
      light: StyleProp<TextStyle>;
      regular: StyleProp<TextStyle>;
      medium: StyleProp<TextStyle>;
      bold: StyleProp<TextStyle>;
    };
  };
}

export type RTheme = Record<EThemeName, IBaseLayout>;

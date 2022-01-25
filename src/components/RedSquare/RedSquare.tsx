import { EThemeName } from "@Themes/interfaces";
import { ThemeContext, Themes } from "@Themes/usetheme";
import React, { FC, useContext } from "react";
import { Text, TouchableOpacity } from "react-native";

const RedSquare: FC = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={[
        theme.width.half,
        // theme.height.half,
        theme.margin.bottom.small,
        theme.colors.background.primary,
      ]}
      activeOpacity={1}
      onPress={() => {
        setTheme(
          theme.__THEMENAME === EThemeName.Default
            ? Themes[EThemeName.Alternate]
            : Themes[EThemeName.Default]
        );
      }}
    >
      <Text
        style={[
          theme.font.size.large,
          theme.font.colors.light,
          theme.font.weight.bold,
        ]}
      >
        {theme.__THEMENAME}
      </Text>

      <Text
        style={[
          theme.font.size.large,
          theme.font.colors.primary,
          theme.font.weight.bold,
        ]}
      >
        Primary
      </Text>
      <Text
        style={[
          theme.font.size.large,
          theme.font.colors.secondary,
          theme.font.weight.bold,
        ]}
      >
        Secondary
      </Text>
      <Text
        style={[
          theme.font.size.large,
          theme.font.colors.tertiary,
          theme.font.weight.bold,
        ]}
      >
        Tertiary
      </Text>
      <Text
        style={[
          theme.font.size.large,
          theme.font.colors.error,
          theme.font.weight.bold,
        ]}
      >
        Error
      </Text>
      <Text
        style={[
          theme.font.size.large,
          theme.font.colors.info,
          theme.font.weight.bold,
        ]}
      >
        Info
      </Text>
      <Text
        style={[
          theme.font.size.large,
          theme.font.colors.success,
          theme.font.weight.bold,
        ]}
      >
        Success
      </Text>
      <Text
        style={[
          theme.font.size.large,
          theme.font.colors.warning,
          theme.font.weight.bold,
        ]}
      >
        Warning
      </Text>
      <Text
        style={[
          theme.font.size.large,
          theme.font.colors.light,
          theme.font.weight.bold,
        ]}
      >
        Light
      </Text>
      <Text
        style={[
          theme.font.size.large,
          theme.font.colors.dark,
          theme.font.weight.bold,
        ]}
      >
        Dark
      </Text>
    </TouchableOpacity>
  );
};

export default RedSquare;

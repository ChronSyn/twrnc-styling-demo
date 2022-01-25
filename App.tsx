import { StyleSheet, View } from "react-native";
import { ThemeContext, Themes } from "@Themes/usetheme";
import RedSquare from "@Components/RedSquare/RedSquare";
import { EThemeName } from "@Themes/interfaces";
import React, { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(Themes[EThemeName.Default]);
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      <View
        style={[
          // theme.flex.flex,
          theme.padding.all.xxxlarge,
          theme.colors.background.light,
          theme.flex.alignItems.center,
          theme.flex.justifyContent.center,
          theme.flex.alignContent.center,
        ]}
      >
        <RedSquare />
        <RedSquare />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

# TWRNC with hooks - How to centralise your styles

This project provides an example of using TWRNC with React Native in order to create maintainable, centralised-yet-flexible themes in your application.

It is designed to be used as part of a Typescript project. It's certainly possible to use these concepts in a regular Javascript project but it may not be possible for VSCode to infer properties available in your themes unless you're using Typescript.

### The current problem

Many of the problems with current approaches is that they result in codebases where styles are either entirely centralised in one area with `StyleSheet` (resulting in huge files dedicated to styling), or spread across the codebase with the likes of `StyleSheet` or `styled-components` (or similar libraries).

Perhaps the worst side-effect of this is that colours are often mixed in with layout props. For example, you might have a label style which includes `fontSize`, `fontWeight` and `color` properties.

In some cases, a developer may even go as far as duplicating a huge style file and then manually changing every instance where color is set. This isn't efficient and refactoring can be a significant time investment, especially if you need to add more properties to every theme.

### My solution

My solution makes use of the `TWRNC` library, though the concepts here can also be implemented with the regular `StyleSheet`.

It splits the concept of layout and theme into 2 distinct silos - layout, and theme.

**Layout**
This defines the size, padding, margin, position, etc. of components. It is a single source of truth.

**Theme**
This defines only the color of components. It is a source of truth only for colours, but can be switched out with another compatible source of truth (e.g. by the user choosing a different theme for the app).

To simplify the integration, a `useTheme` context hook is used, and minimal state is created at the root of the application (more details on that at the end).

### Deep-dive

Let's start with our base - `App.tsx`. This includes a useState hook that will be used with context from our hook. This file also imports a `RedSquare` component from `src/components/RedSquare/RedSquare.tsx`.

Inside this component, we render a `TouchableOpacity` which includes a number of `Text` components, and when pressed, it will switch between 2 themes (`Default` and `Alternate`) using our `useTheme` hook which is imported from `src/theming/useTheme.ts`.

The most important part of making this maintainable are the interfaces, found in `src/theming/interfaces.ts`.

Inside this file, we create several types, enums and interfaces:

- `IBaseColors` - An interface which accepts a generic of `StyleProp<ViewStyle>` or `StyleProp<TextStyle>`. It specifies the names/keys of all the colors we'll use in our themes
- `EThemeName` - An enum which contains our theme names - could also be created as a type instead, but enum allows easier renaming in future
- `IColors` - An interface which includes 3 properties: `__THEMENAME` (`EThemeName`) the name of our theme, `background` (`IBaseColors<StyleProp<ViewStyle>>`) background colors, and `font` (`IBaseColors<StyleProp<TextStyle>>`) font colors.
- `IBaseLayout` - The interface which defines what properties are available for configuring the layout of a component. It includes properties such as `width.full`, `height.full`, but also includes some color properties (these are passed into the layout from our theme)
- `RTheme` - A record type of `EThemeName` and `IBaseLayout`. Used to define what themes are available in the app (used as part of the `useTheme` hook)

### The hook

The `useTheme` hook (`src/theming/useTheme.ts`) is a context hook that is invoked via `useContext`. This allows us the benefit of sharing the theme across the entire app without having to use a singleton, a separate state store or dependency injection. It allows us to keep the code clean and maintainable with minimal technical debt.

You could choose to use something like MobX to manage the theme as state instead, but bringing in third-party state management solutions is outside the scope of this example project.

Anywhere we want to use the theme, we call something like this:

```tsx
import { ThemeContext, Themes } from "@Themes/usetheme";
import React, { FC, useContext } from "react";

const RedSquare: FC = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return {
    // If you want to change the theme, you'd call:
    //
    // setTheme(Themes[EThemeName.Alternate])
    //
    // For example, you could use it in the onPress of a TouchableOpacity
  };
};
```

### What's the end-result?

The end-result is an easy way of creating maintainable layouts while still allowing easy switching of themes across the entire application. Since we're not relying on a library like `Styled-Components` the performance overhead is as close to using a normal `StyleSheet` as you can get.

It's designed to avoid third-party libraries as much as possible. `TWRNC` was chosen because it contains some great defaults which can help you rapidly develop UIs, but you could recreate this in `StyleSheet`.

You could even combine both - for example, using your own custom colours instead of the ones provided by `TWRNC`. You could even go so far as to have some themes using `TWRNC` colors and others using `StyleSheet`. Since both the `tw` call and `StyleSheet` use the `StyleProp<ViewStyle>` or `StyleProp<TextStyle>` type, they can be freely interchanged or combined.

If you really wanted to, you could have some of your layout properties being generated by `tw`, and others being created as `StyleSheet` - or even just using any valid `StyleProp`.

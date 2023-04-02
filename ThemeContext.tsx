/**
 * Here we centerlized everything related to useContext
 * 1) state management; useState
 * 2) state manupulation; toggleTheme
 * 3) Wrap all the component into single a hood; {children}
 * 4) expose theme context by custom hook; useTheme,useThemeUpdate
 */

import * as React from 'react';
export const ThemeContext = React.createContext(false);
export const ThemeUpdateContext = React.createContext(undefined);

export function useTheme() {
  return React.useContext(ThemeContext);
}

export function useThemeUpdate() {
  return React.useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = React.useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

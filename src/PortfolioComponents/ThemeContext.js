import React, { useState } from "react";

// https://codesandbox.io/p/sandbox/using-dark-mode-in-react-context-75bhv?file=%2Fsrc%2FApp.js%3A10%2C32
// Create context object
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

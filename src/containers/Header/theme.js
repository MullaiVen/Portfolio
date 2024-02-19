import React from "react";

export const ThemeContext = React.createContext();

export const lightTheme = {
  body: "white",
  text: "black",
  toggleBorder: "#FFF",
  background: "#363537",
};

export const darkTheme = {
  body: "black",
  text: "white",
  toggleBorder: "#6B8096",
  background: "#999",
};

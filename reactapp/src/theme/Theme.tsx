"use client";
import React, { ReactNode } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  lighten,
  darken,
} from "@mui/material";

export type ThemeType = {
  defaultDark: boolean;
  primary: string;
  secondary: string;
  altContrast?: string;
  background: string;
  paper: string;
  label?: string;
  icon?: string;
};

export interface ThemeWrapper {
  theme: ThemeType;
  children?: ReactNode;
}

const Theme: React.FC<ThemeWrapper> = ({ theme, children }) => {
  
  const {
    defaultDark = true,
    primary = "#F7B500",
    secondary = "#E3EBF0",
    background = darken("#203347", 0.1),
    paper = "#203347",
  } = theme;

  const darkMode = defaultDark;

  const customTheme = createTheme({
    palette: {
      // mode: darkMode ? "dark" : "light",
      mode: "dark",
      primary: {
        main: darkMode ? lighten(primary, 0.25) : darken(primary, 0.25),
      },
      secondary: {
        main: darkMode ? lighten(secondary, 0.5) : darken(secondary, 0.5),
      },
      background: {
        default: background,
        paper,
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

/*
  <pre>customTheme: {JSON.stringify(customTheme, null, 2)}</pre>
*/

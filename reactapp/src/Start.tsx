"use client";
import config from "./config.json";
import * as React from "react";
import {
  Box,
  Container,
} from "@mui/material";
import { Theme } from "./theme";
import {
  Hero,
} from "./components";

export interface StartProps {
  id?: string;
}

const Start: React.FC<StartProps> = ({
  id = "start",
}) => {

  const darkmode = true;
  const customTheme = config.theme[darkmode ? "dark" : "light"];

  return (
    <Box 
      id={id}
      sx={{ 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}
    >
      <Theme theme={customTheme}>
        <Container 
          maxWidth="sm" 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}
        >
          <Hero id="hero" options={{
            
          }} />
        </Container>
      </Theme>
    </Box>
  );
};

export default Start;
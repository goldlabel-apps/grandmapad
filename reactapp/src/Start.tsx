"use client";
import config from "./config.json";
import * as React from "react";
import {
  Box,
  Container,
  ButtonBase,
  Collapse
} from "@mui/material";
import { Theme } from "./theme";
import {
  Hero,
  WhoAreYou,
} from "./components";
import {
  // useUbereduxDispatch,
  useUbereduxSelect,
  selectUberedux,
} from "./uberedux";

export interface StartProps {
  id?: string;
}

const Start: React.FC<StartProps> = ({
  id = "start",
}) => {

  const uberedux = useUbereduxSelect(selectUberedux);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const darkmode = true;
  const customTheme = config.theme[darkmode ? "dark" : "light"];

  const handleToggleCollapse = () => {
    setTimeout(() => {
      setIsExpanded(prev => !prev);
    }, 333);
  };

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
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column',
          }}
        >
          {isExpanded ? null : <ButtonBase
            onClick={handleToggleCollapse}
            sx={{
              textAlign: "left",
              width: '100%',
            }}
          >
            <Hero 
              id="hero" 
              options={{
                avatar: config.favicon,
                title: config.appTitle,
                subheader: config.description,
              }} 
            />
          </ButtonBase> }
          

          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <pre>uberredux: {JSON.stringify(uberedux, null, 2)}</pre>
            <WhoAreYou id="who-are-you"/>
          </Collapse>

        </Container>
      </Theme>
    </Box>
  );
};

export default Start;
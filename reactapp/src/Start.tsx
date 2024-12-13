"use client";
import config from "./config.json";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import {Theme} from "./theme";


export interface StartProps {
  id: string;
}

const Start: React.FC<StartProps> = ({ id }) => {

  const darkmode = true;
  const customTheme = config.theme[darkmode ? "dark" : "light"];

  return (<Theme theme={customTheme}>
      <div id={id}>
        <Card sx={{ width: 320 }}>
          <CardMedia
            image={config.og}
            alt={config.appTitle}
            component="img"
            height="170"
          />
          <CardHeader title={`${config.description}`} />
          <CardContent>
            <Grid container spacing={2}>
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                }}
              >
                <Typography variant="body1" sx={{ mb: 2 }}>
                  L
                </Typography>
              </Grid>
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                }}
              >
                <Typography variant="body1" sx={{ mb: 2 }}>
                  R
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </Theme>
  );
};

export default Start;

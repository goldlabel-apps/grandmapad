"use client";
import config from "./_config.json";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export interface StartProps {
  id: string;
}

const Start: React.FC<StartProps> = ({ id }) => {
  return (
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
                An easy to implement framework based on React & NextJS. Take
                your slow old WordPress site and make it not only super fast,
                but rank better in Google.
              </Typography>
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 6,
              }}
            >
              <Typography variant="body1" sx={{ mb: 2 }}>
                Modular additions to a NextJS static site generating frontend
                developed by us
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Start;

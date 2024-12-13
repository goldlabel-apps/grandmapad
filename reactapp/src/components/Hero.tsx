"use client";
import * as React from "react";
// import Grid from "@mui/material/Grid2";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  // CardContent,
  // Typography,
} from "@mui/material";

export interface IHero {
  id: string;
  options?: any;
}

const Hero: React.FC<IHero> = ({ id }) => {

  return (
      <Box id={id}>
        <Card>
          
          <CardHeader 
            avatar={<Avatar src="/svg/favicon.svg" />}
            title="grandmaPad" />
          <CardMedia
            image="/jpg/opengraph.jpg"
            alt={"config.appTitle"}
            component="img"
            height="170"
          />
          {/* <CardContent>
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
          </CardContent> */}
        </Card>
      </Box>
  );
};

export default Hero;

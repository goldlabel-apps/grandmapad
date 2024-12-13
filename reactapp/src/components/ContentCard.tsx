"use client";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export interface IContentCard {
  id: string;
}

const ContentCard: React.FC<IContentCard> = ({ id }) => {

  return (
      <Box id={id}>
        <Card sx={{ width: 320 }}>
          <CardMedia
            image={'config.og'}
            alt={"config.appTitle"}
            component="img"
            height="170"
          />
          <CardHeader title={`${"config.description"}`} />
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
      </Box>
  );
};

export default ContentCard;

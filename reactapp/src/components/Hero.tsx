"use client";
import * as React from "react";
// import Grid from "@mui/material/Grid2";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Typography,
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
        <Card sx={{minWidth: 320}}>
          
          <CardHeader 
            avatar={<Avatar src="/jpg/grandma.jpg" />}
            title={<Typography variant="h6">
                      grandmaPad
                    </Typography>} 
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

"use client";
import * as React from "react";
// import Grid from "@mui/material/Grid2";
import {
  Box,
} from "@mui/material";

export interface INewRC {
  id: string;
}

const NewRC: React.FC<INewRC> = ({ id }) => {

  return (
      <Box id={id}>
        NewRC
      </Box>
  );
};

export default NewRC;
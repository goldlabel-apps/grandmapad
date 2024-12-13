"use client";
import * as React from "react";
import {
  Avatar,
  Box,
  CardHeader,
} from "@mui/material";

export interface IHero {
  id: string;
  options?: {
    avatar?: string;
    title?: string;
    subheader?: string;
  };
};

const Hero: React.FC<IHero> = ({ 
  id,
  options={
    avatar: null,
    title: null,
    subheader:null,
  },
}) => {

  const {
    avatar,
    title,
    subheader,
  } = options;

  return <Box id={id}>
          <CardHeader 
            avatar={avatar ? <Avatar src={avatar} alt={title} /> : null }
            title={title}
            subheader={subheader}
          />
        </Box>
};

export default Hero;

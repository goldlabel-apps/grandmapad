import * as React from "react";
import {IHero} from "../types";
import {
  Avatar,
  Box,
  CardHeader,
  Typography,
} from "@mui/material";

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
            title={<Typography variant="h4">{title}</Typography>}
            subheader={subheader}
          />
        </Box>
};

export default Hero;

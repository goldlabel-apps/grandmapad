import * as React from "react";
import {IHero} from "../types";
import {
  Avatar,
  Box,
  IconButton,
  CardHeader,
  Typography,
} from "@mui/material";
import {
  useUbereduxSelect,
  selectSubheader,
} from "../uberedux";

const Hero: React.FC<IHero> = ({ 
  id,
  options={
    avatar: null,
    title: null,
  },
}) => {
  const subheader = useUbereduxSelect(selectSubheader);
  const {
    avatar,
    title,
  } = options;

  const onHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("/", "_self");
  };

  return <Box id={id} sx={{minWidth: 320}}>
          <CardHeader 
            avatar={avatar ? <IconButton onClick={onHomeClick}>
                                <Avatar src={avatar} alt={title} />
                              </IconButton> : null }
            title={<Typography variant="h5">{title}</Typography>}
            subheader={subheader}
          />
        </Box>
};

export default Hero;

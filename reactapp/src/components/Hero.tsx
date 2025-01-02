import * as React from "react";
import {IHero} from "../types";
import {
  Avatar,
  Box,
  IconButton,
  CardHeader,
} from "@mui/material";
import {
  useUbereduxSelect,
  selectSubheader,
  selectTitle,
  selectUser,
  selectAuthUid,
} from "../uberedux";

const Hero: React.FC<IHero> = ({ 
  id,
}) => {
  const title = useUbereduxSelect(selectTitle);
  const subheader = useUbereduxSelect(selectSubheader);
  const user = useUbereduxSelect(selectUser);
  const authUid = useUbereduxSelect(selectAuthUid);

  let avatar = "/svg/favicon.svg";
  if (user){
    avatar = user.avatar;
  };

  const onHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("/", "_self");
  };

  return <Box id={id} sx={{minWidth: 320}}>
          <CardHeader 
            avatar={avatar ? <IconButton onClick={onHomeClick}>
                                <Avatar src={avatar} alt={title} />
                              </IconButton> : null }
            title={ authUid ? authUid : subheader }
          />
        </Box>
};

export default Hero;

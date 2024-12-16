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
  // useUbereduxDispatch,
  useUbereduxSelect,
  selectSubheader,
  selectTitle,
  selectUser,
  selectAuthUid,
  // authSignOut,
} from "../uberedux";
// import {Icon} from "../theme";

const Hero: React.FC<IHero> = ({ 
  id,
}) => {
  // const dispatch = useUbereduxDispatch();
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

  // const onSignOut = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   dispatch(authSignOut());
  // };

  return <Box id={id} sx={{minWidth: 320}}>
          <CardHeader 
            avatar={avatar ? <IconButton onClick={onHomeClick}>
                                <Avatar src={avatar} alt={title} />
                              </IconButton> : null }
            title={<Typography variant="h5">
                    { title }
                  </Typography>}
            subheader={ authUid ? authUid : subheader }
          />
        </Box>
};

export default Hero;

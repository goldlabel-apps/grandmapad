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
  selectAuthState,
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
  const authState = useUbereduxSelect(selectAuthState);
  // console.log("authState", authState);
  let uid = null;
  if (authState){
    uid = authState.uid;
  }
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
                    {title}
                  </Typography>}
            subheader={uid ? uid : subheader}
            // action={authState ? <IconButton onClick={onSignOut}>
            //                       <Icon icon="signout" />
            //                     </IconButton> : null }
          />
        </Box>
};

export default Hero;

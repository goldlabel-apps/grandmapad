import * as React from "react";
import {
  Avatar,
  Card,
  CardHeader,
  Box,
  IconButton,
  Menu,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Icon } from "../theme";
import { 
  useUbereduxDispatch, 
  useUbereduxSelect,
  authSignOut,
  selectUberedux,
  setUser,
} from "../uberedux";
import {
  MessageWrite,
} from "./";

export interface ISignedIn {
  id: string;
}

const SignedIn: React.FC<ISignedIn> = ({ id }) => {

  const dispatch = useUbereduxDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const uberedux = useUbereduxSelect(selectUberedux);
  const { authUid, user, users } = uberedux;

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () =>  setAnchorEl(null);

  const handleSignOut = () => {
    dispatch(authSignOut());
    handleMenuClose();
  };

  React.useEffect(() => {
    if (!user){
      const user = users?.find(user => user.uid === authUid);
      dispatch(setUser(user));
    };
  }, [authUid, user, users, dispatch]);

  if (!user) return null;
  const {
    avatar,
    nickname,
  } = user as any;

  return (
    <Card sx={{ width: 320 }}>
      <Box>
        <MessageWrite id="message-write" />
        <CardHeader 
          avatar={<Avatar src={avatar} alt={nickname} />}
          title={nickname}
        />
      </Box>

      <Box 
        id={id} 
        sx={{
          position: 'fixed',
          bottom: 8,
          right: 8,
        }}
      >
        <IconButton 
          onClick={handleMenuOpen} 
          color="inherit">
          <Icon icon="menu" />
        </IconButton>
      </Box>

      <Menu
        id="app-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <ListItemButton onClick={handleSignOut}>
          
          <ListItemText 
            sx={{mx: 3}}
            primary="Sign out"
          />
          <ListItemIcon>
            <Icon icon="signout" />
          </ListItemIcon>
        </ListItemButton>

      </Menu>
    </Card>
  );
};

export default SignedIn;
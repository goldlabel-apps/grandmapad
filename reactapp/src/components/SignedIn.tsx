import * as React from "react";
import {
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

  return (
    <>
      <Box>
        <pre>user: {JSON.stringify(user, null, 2)}</pre>  
      </Box>

      <Box 
        id={id} 
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
      >
        <IconButton 
          onClick={handleMenuOpen} 
          color="secondary">
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
    </>
  );
};

export default SignedIn;
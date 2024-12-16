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
  // selectUser,
  selectAuthUid,
  authSignOut,
} from "../uberedux";

export interface IAppMenu {
  id: string;
}

const AppMenu: React.FC<IAppMenu> = ({ id }) => {

  const dispatch = useUbereduxDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const authUid = useUbereduxSelect(selectAuthUid);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () =>  setAnchorEl(null);

  const handleSignOut = () => {
    dispatch(authSignOut());
    handleMenuClose();
  };

  return (
    <>
      <Box>
        <pre>authUid: {JSON.stringify(authUid, null, 2)}</pre>  
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

export default AppMenu;
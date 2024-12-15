import * as React from "react";
import {
  Avatar,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  useUbereduxDispatch,
  useUbereduxSelect,
  selectUsers,
  setUser,
  setSubheader,
  setTitle,
} from "../uberedux";

export interface IWhoAreYou {
  id: string;
};

const WhoAreYou: React.FC<IWhoAreYou> = ({ id }) => {

  const users = useUbereduxSelect(selectUsers);
  const dispatch = useUbereduxDispatch();
  const onUserClick = (
    user: any,
  ) => {
    const {
      // slug,
      nickname,
    } = user;
    
    dispatch(setUser(user));
    dispatch(setTitle(`Hello ${nickname}`));
    dispatch(setSubheader("What was the name of our dog?"));
  };
  
  return <List id={id} sx={{minWidth: 320}}>
          { users?.map((user: any, i: number) => {
            const {
              nickname,
              avatar,
            } = user;
            return <ListItemButton 
                      key={`user_${i}`}
                      onClick={() => { onUserClick(user); }}>
                      <ListItemText 
                        primary={<Typography variant="h6">
                                  {nickname}
                                </Typography>} />
                      <ListItemAvatar>
                        <Avatar src={avatar} alt={nickname}/>
                      </ListItemAvatar>
                    </ListItemButton>;
          })}
        </List>
};

export default WhoAreYou;

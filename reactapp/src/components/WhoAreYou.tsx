import * as React from "react";
import {
  Avatar,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
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
      nickname,
    } = user;
    dispatch(setUser(user));
    dispatch(setTitle(`Hello ${nickname}`));
    dispatch(setSubheader("What was the name of our dog?"));
  };
  
  return <List id={id} sx={{minWidth: 500}}>
          { users?.map((user: any, i: number) => {
            const {
              nickname,
              avatar,
            } = user;
            return <ListItemButton 
                      key={`user_${i}`}
                      onClick={() => { onUserClick(user); }}>
                      <ListItemAvatar>
                        <Avatar src={avatar} alt={nickname}/>
                      </ListItemAvatar>
                      <ListItemText 
                        primary={nickname} />
                      
                    </ListItemButton>;
          })}
        </List>
};

export default WhoAreYou;

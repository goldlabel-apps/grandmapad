"use client";
import * as React from "react";
import {
  Avatar,
  Box,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

export interface IWhoAreYou {
  id: string;
};

const users = [
  {
    nickname: "Gisela",
    role: "grandma",
    avatar: "/jpg/avatars/gisela.jpg",
  },
  {
    nickname: "Caroline",
    role: "child",
    avatar: "/jpg/avatars/caroline.jpg",
  },
  {
    nickname: "Karen",
    role: "child",
    avatar: "/jpg/avatars/karen.jpg",
  },
  {
    nickname: "Christopher",
    role: "child",
    avatar: "/jpg/avatars/christopher.jpg",
  },
];

const WhoAreYou: React.FC<IWhoAreYou> = ({ id }) => {

  return (
      <Box id={id}>
        <Typography variant="h4" sx={{mb: 2}}>
          Who are you?
        </Typography>
        
        <List>
          { users.map((user: any, i: number) => {
            const {
              nickname,
              avatar,
            } = user;
            return <ListItemButton 
                      key={`user_${i}`}
                      onClick={() => {
                        console.log("c")
                      }}>
                      <ListItemAvatar>
                        <Avatar src={avatar} alt={nickname}/>
                      </ListItemAvatar>
                      <ListItemText 
                        primary={<Typography variant="h6">
                                  {nickname}
                                </Typography>}/>
                    </ListItemButton>;
          })}
        </List>
      </Box>
  );
};

export default WhoAreYou;

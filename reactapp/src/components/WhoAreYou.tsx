"use client";
import * as React from "react";
import {
  CardHeader,
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
    nickname: "Stewart",
    role: "husband",
    avatar: "/jpg/avatars/stewart.jpg",
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

        <CardHeader 
          avatar={<Avatar src={"/svg/favicon.svg"} alt={"Who are you?"} />}
          title={<Typography variant="h4">Who are you?</Typography>}
        />
        
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

import * as React from "react";
import {
  Box,
} from "@mui/material";
// import {
//   useUbereduxSelect,
//   selectUser,
// } from "../uberedux";
import {
  MessageList,
  MessageWrite,
} from "../components";

export interface IAuthedUser {
  id: string;
}

const AuthedUser: React.FC<IAuthedUser> = ({ id }) => {
  // const user = useUbereduxSelect(selectUser);
  return (
      <Box id={id}>
        <MessageList id="message-list" />
        <MessageWrite id="message-list" />
        {/* <pre>user: {JSON.stringify(user, null, 2)}</pre> */}
      </Box>
  );
};

export default AuthedUser;

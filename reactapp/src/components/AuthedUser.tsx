import * as React from "react";
import {
  Box,
} from "@mui/material";
import {
  useUbereduxSelect,
  selectAuthState,
  selectUsers,
  selectUser,
} from "../uberedux";

export interface IAuthedUser {
  id: string;
}

const AuthedUser: React.FC<IAuthedUser> = ({ id }) => {
  const authState = useUbereduxSelect(selectAuthState);
  const user = useUbereduxSelect(selectUser);
  return (
      <Box id={id}>
        <pre>authState: {JSON.stringify(authState, null, 2)}</pre>
        <pre>user: {JSON.stringify(user, null, 2)}</pre>
      </Box>
  );
};

export default AuthedUser;

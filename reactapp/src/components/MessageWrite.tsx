import * as React from "react";
import {
  Box,
} from "@mui/material";

export interface IMessageWrite {
  id: string;
}

const MessageWrite: React.FC<IMessageWrite> = ({ id }) => {

  return (
      <Box id={id}>
        MessageWrite
      </Box>
  );
};

export default MessageWrite;

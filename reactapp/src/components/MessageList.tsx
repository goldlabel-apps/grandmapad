import * as React from "react";
import {
  Box,
} from "@mui/material";

export interface IMessageList {
  id: string;
}

const MessageList: React.FC<IMessageList> = ({ id }) => {

  return (
      <Box id={id}>
        MessageList
      </Box>
  );
};

export default MessageList;

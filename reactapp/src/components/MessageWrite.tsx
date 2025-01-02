import * as React from "react";
import {
  CardContent,
  InputAdornment,
  FormControl,
  InputLabel,
  Input,
  IconButton,
} from "@mui/material";
import VisibilityOff from '@mui/icons-material/Send';

export interface IMessageWrite {
  id: string;
}

const MessageWrite: React.FC<IMessageWrite> = ({ id }) => {

  return (
      <CardContent id={id}>
        <FormControl sx={{ width:"100%" }} variant="standard">
          <InputLabel htmlFor="message">
            Tell Grandma...
          </InputLabel>
          <Input
            id="message"
            fullWidth
            multiline
            minRows={2}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                   <VisibilityOff /> 
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </CardContent>
  );
};

export default MessageWrite;

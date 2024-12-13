import * as React from "react";
import { Uberedux } from "./uberedux"; 
import {
  Box,
} from "@mui/material";
import Start from "./Start";

export interface IApp {
  id?: string;
  children?: React.ReactNode;
}

const App: React.FC<IApp> = ({
  id = "app",
  children = null,
}) => {

  return <Uberedux><Box id={id} >
            <Start />
            {children}
          </Box></Uberedux>
};

export default App;
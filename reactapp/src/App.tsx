import * as React from "react";
import { IApp } from "./types";
import { Uberedux } from "./uberedux"; 
import Start from "./Start";

const App: React.FC<IApp> = ({
  id,
  children = null,
}) => {

  return <Uberedux>
          <Start id={id} />
          {children}
        </Uberedux>
};

export default App;

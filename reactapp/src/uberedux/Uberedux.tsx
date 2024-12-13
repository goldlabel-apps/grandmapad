import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./";

export interface UbereduxWrapper {
  children?: ReactNode;
};

const Uberedux = ({ 
  children,
}: UbereduxWrapper) => {
  return <Provider store={store}>
          {children}
        </Provider>;
};

export default Uberedux;

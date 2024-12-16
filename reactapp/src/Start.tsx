import * as React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { 
  Box,
  Container,
} from "@mui/material";
import { 
  useUbereduxSelect, 
  useUbereduxDispatch, 
  selectUberedux, 
  setAuthUid 
} from "./uberedux";
import { Theme } from "./theme";
import { 
  AppMenu,
  Hero,
  Password,
} from "./components";

export interface IStart {
  id: string;
};

const Start: React.FC<IStart> = ({ id }) => {

  const dispatch = useUbereduxDispatch();
  const uberedux = useUbereduxSelect(selectUberedux);
  const { config, authUid } = uberedux;

  React.useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuthUid(user.uid));
      } else {
        dispatch(setAuthUid(null));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Box 
      id={id}
      sx={{ 
        height: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center" 
      }}
    >
      <Theme theme={config.theme.light}>
      <Container maxWidth="xs"
        sx={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          flexDirection: "column",
        }}> 
  
        <Hero id="hero" />
      
        { authUid ? <>
          <AppMenu id="app-menu" />
        </> : <Password id="password" /> }

      </Container>
      </Theme>
    </Box>
  );
};

export default Start;

{/* 
  <pre>authUid: {JSON.stringify(authUid, null, 2)}</pre>   
*/}
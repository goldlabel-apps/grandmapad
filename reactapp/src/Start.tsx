import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { Theme } from "./theme";
import { Hero, WhoAreYou, Password } from "./components";
import { 
  useUbereduxSelect, 
  selectUberedux,
  useUbereduxDispatch,
  setAuthState,
} from "./uberedux";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

export interface StartProps {
  id?: string;
}

const Start: React.FC<StartProps> = ({ id = "start" }) => {
  
  const dispatch = useUbereduxDispatch();
  const uberedux = useUbereduxSelect(selectUberedux);
  const [loading, setLoading] = useState(true);
  const {
    config,    
    user,
    authState,
  } = uberedux;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuthState({
          uid: user.uid,
          email: user.email,
          // accessToken: user.accessToken,
        }));
      } else {
        dispatch(setAuthState(null));
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [dispatch]);

  if (loading) return null;

  return (
    <>  
      <Box 
        id={id}
        sx={{ 
          height: "100vh", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center" 
        }}>
        <Theme theme={config.theme.light}>
          <Container 
            sx={{ 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              flexDirection: "column",
            }}>
              {/*  */}
              <Hero id="hero" />
              { !user && !authState ? <WhoAreYou id="who-are-you"/> : null }
              { !authState && user ? <Password id="password" /> : null }
          </Container>
        </Theme>
      </Box>
    </>
  );
};

export default Start;

/*
{ authState ? <pre>authState: {JSON.stringify(authState, null, 2)}</pre> : null }
*/
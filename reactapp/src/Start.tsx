import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { Theme } from "./theme";
import { Hero, WhoAreYou } from "./components";
import { useUbereduxSelect, selectUberedux } from "./uberedux";
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase'; // Reuse the existing firebase app instance

export interface StartProps {
  id?: string;
}

const Start: React.FC<StartProps> = ({ id = "start" }) => {

  const uberedux = useUbereduxSelect(selectUberedux);
  const {
    config,    
    userSlug,
  } = uberedux;

  const [authState, setAuthState] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  if (authState) console.log(authState);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User signed in:', user);
        setAuthState(user);
      } else {
        console.log('No user signed in');
        setAuthState(null);
      }
      console.log('Loading...');
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

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
              {/* <pre>authState: {JSON.stringify(authState, null, 2)}</pre> */}
              <Hero 
                id="hero" 
                options={{
                  avatar: config.favicon,
                }} 
              />
              { !userSlug ? <WhoAreYou id="who-are-you"/> : null }
          </Container>
        </Theme>
      </Box>
    </>
  );
};

export default Start;
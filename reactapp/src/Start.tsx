import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { Theme } from "./theme";
import { 
  AppMenu, 
  AuthedUser,
  Hero, 
  WhoAreYou, 
  Password, 
} from "./components";
import { 
  useUbereduxSelect, 
  selectUberedux,
  useUbereduxDispatch,
  setAuthState,
  setUser,
} from "./uberedux";
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth } from './firebase';

export interface StartProps {
  id?: string;
}

export interface User {
  uid: string;
  email: string;
  nickname?: string;
  slug?: string;
  role?: string;
  avatar?: string;
}

export interface UbereduxState {
  config: { theme: { light: any } };
  user: User | null;
  users: User[];
  authState: any;
}

const Start: React.FC<StartProps> = ({ id = "start" }) => {
  
  const dispatch = useUbereduxDispatch();
  const uberedux = useUbereduxSelect(selectUberedux) as UbereduxState;
  const [loading, setLoading] = useState<boolean>(true);
  const { config, user, users, authState } = uberedux;
  const getUserByUid = (users: User[], uid: string): User | undefined => 
    users.find((user) => user.uid === uid);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        const thisUser = getUserByUid(users, firebaseUser.uid);
        dispatch(setAuthState({uid: firebaseUser.uid}));
        dispatch(setUser(thisUser ?? null));
      } else {
        dispatch(setAuthState(null));
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [dispatch, users]);

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
        }}
      >
        <Theme theme={config.theme.light}>
          <Container 
            maxWidth="xs"
            sx={{ 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              flexDirection: "column",
            }}
          > 
            <Box 
              id="main"
              sx={{
                display: "block",
                width: "100%",
              }}
            >
              {!authState && <Hero id="hero" />}
              {!user && !authState && <WhoAreYou id="who-are-you" />}
              {!authState && user && <Password id="password" />}
              {authState && (
                <>
                  <AppMenu id="app-menu" />
                  <AuthedUser id="authed-user" />
                </>
              )}
            </Box>
          </Container>
        </Theme>
      </Box>
    </>
  );
};

export default Start;
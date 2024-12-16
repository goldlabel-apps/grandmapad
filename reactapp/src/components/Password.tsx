import * as React from "react";
import {
  Box,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  LinearProgress,
} from "@mui/material";
import { Icon } from "../theme";
import {
  useUbereduxSelect,
  useUbereduxDispatch,
  selectAuthing,
  selectUser,
  authSignIn,
} from "../uberedux";
import {
  WhoAreYou,
  Hero,
} from "../components";

export interface IPassword {
  id: string;
}

const Password: React.FC<IPassword> = ({ id }) => {

  const dispatch = useUbereduxDispatch();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [password, setPassword] = React.useState<string>("");
  const authing = useUbereduxSelect(selectAuthing);
  const user = useUbereduxSelect(selectUser);

  const onSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(authSignIn(password));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleMouseUpPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const isPasswordValid = password.length >= 6;

  return <>
      {/* <pre>(user: {JSON.stringify(user, null, 2)}</pre>    */}
      <Hero id="hero" />
      { !user ? <WhoAreYou id="who-are-you"/> : <>
        { !authing ? <Box 
            id={id} 
            component={"form"}
            sx={{ my: 2 }}
          >
            <OutlinedInput
              fullWidth
              autoFocus
              autoComplete="new-password"
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton
                    sx={{mr:1}}
                    aria-label={showPassword ? 'hide the password' : 'display the password'}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <Icon icon="hide" /> : <Icon icon="show" />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button
              fullWidth
              disabled={!isPasswordValid}
              variant="contained"
              onClick={onSignIn}
              sx={{ my: 2 }}>
              Sign in
            </Button>
          </Box> : <LinearProgress /> }
      
      </> }
    


    
    </>
};

export default Password;
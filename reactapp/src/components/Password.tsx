import * as React from "react";
import {
  Box,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  LinearProgress,
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  useUbereduxSelect,
  useUbereduxDispatch,
  selectUser,
  selectAuthing,
  authSignIn,
} from "../uberedux";

export interface IPassword {
  id: string;
}

const Password: React.FC<IPassword> = ({ id }) => {

  const dispatch = useUbereduxDispatch();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [password, setPassword] = React.useState<string>("");
  const user = useUbereduxSelect(selectUser);
  const authing = useUbereduxSelect(selectAuthing);

  if (!user) return null;
  const { email } = user;

  const onSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(authSignIn(email, password));
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

  return (
    <>

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
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={showPassword ? 'hide the password' : 'display the password'}
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {isPasswordValid ? <Button
          fullWidth
          variant="contained"
          onClick={onSignIn}
          sx={{ my: 2 }}
        >
          Sign in
        </Button> : <Box sx={{ height: 32 }} /> }
        

        {/* <pre>user: {JSON.stringify(user, null, 2)}</pre> */}
        {/* <pre>authState: {JSON.stringify(authState, null, 2)}</pre> */}
      </Box> : <LinearProgress /> }
      
    </>
  );
};

export default Password;
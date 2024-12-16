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
  const authing = useUbereduxSelect(selectAuthing);

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
        <Button
          fullWidth
          disabled={!isPasswordValid}
          variant="contained"
          onClick={onSignIn}
          sx={{ my: 2 }}>
          Sign in
        </Button>
      </Box> : <LinearProgress /> }
    </>
};

export default Password;
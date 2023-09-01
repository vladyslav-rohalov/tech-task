import { Paper, Typography, Divider } from "@mui/material";
import Login from "./login/login";
import Registration from "./register/register";
import { UserDataReg, UserDataLog } from "@/app/utils/interfaces";

interface PropsTypes {
  toggleAuth: (event: React.MouseEvent<HTMLElement>) => void;
  login: boolean;
  showPassword: boolean;
  handleShowPassword: (event: React.MouseEvent<HTMLElement>) => void;
  handleLogin: (userData: UserDataLog) => void;
  handleRegister: (userData: UserDataReg) => void;
}

export default function Auth({
  toggleAuth,
  login,
  showPassword,
  handleShowPassword,
  handleLogin,
  handleRegister,
}: PropsTypes) {
  return (
    <Paper
      sx={{
        maxWidth: "600px",
        margin: "0 auto ",
        p: 4,
        border: "1px solid ",
        borderColor: "primary.light",
      }}
    >
      <Typography>{login ? "Login" : "Register"}</Typography>
      <Divider sx={{ mb: 4 }} />
      {login ? (
        <Login
          toggleAuth={toggleAuth}
          handleLogin={handleLogin}
          showPassword={showPassword}
          handleShowPassword={handleShowPassword}
        />
      ) : (
        <Registration
          toggleAuth={toggleAuth}
          handleRegister={handleRegister}
          showPassword={showPassword}
          handleShowPassword={handleShowPassword}
        />
      )}
    </Paper>
  );
}

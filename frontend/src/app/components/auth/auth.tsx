"use client";

import { useState } from "react";
import { Paper, Typography, Divider } from "@mui/material";
import Login from "./login/login";
import Registration from "./register/register";
import { UserDataReg, UserDataLog } from "@/app/utils/interfaces"; 

interface PropsTypes {
  toggleAuth: (event: React.MouseEvent<HTMLElement>) => void;
  login: boolean;
}

export default function Auth({ toggleAuth, login }: PropsTypes) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = (userData: UserDataLog) => {
    console.log(userData);
  };

  const handleRegister = (userData: UserDataReg) => {
    console.log(userData);
  };

  return (
    <Paper
      sx={{
        width: "600px",
        height: "500px",
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
          handleClick={handleClickShowPassword}
        />
      ) : (
        <Registration
          toggleAuth={toggleAuth}
          handleRegister={handleRegister}
          showPassword={showPassword}
          handleClick={handleClickShowPassword}
        />
      )}
    </Paper>
  );
}

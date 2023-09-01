"use client";
import { useState } from "react";
import { Container } from "@mui/material";
import Auth from "@/app/components/auth/auth";
import { UserDataReg, UserDataLog } from "@/app/utils/interfaces";

export default function Authorization() {
  const [login, setLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = (userData: UserDataLog) => {
    console.log(userData);
  };

  const handleRegister = (userData: UserDataReg) => {
    console.log(userData);
  };

  const handleAuthMethod = () => {
    setLogin(!login);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        px: 3,
        mt: 12,
      }}
    >
      <Auth
        toggleAuth={handleAuthMethod}
        login={login}
        showPassword={showPassword}
        handleShowPassword={handleShowPassword}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
      />
    </Container>
  );
}

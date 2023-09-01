"use client";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { Container } from "@mui/material";
import Auth from "@/app/components/auth/auth";
import { IFormData } from "@/app/utils/interfaces";

axios.defaults.baseURL = "http://localhost:3001";

export default function Authorization() {
  const [login, setLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = (userData: IFormData) => {
    console.log(userData);
  };

  const handleRegister = (userData: IFormData) => {
    async function registerUser() {
      try {
        const response = await axios.post("/users/register", userData);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    registerUser();
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

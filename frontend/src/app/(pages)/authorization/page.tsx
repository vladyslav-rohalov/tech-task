"use client";
import authGuard from "@/app/utils/authGuard";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { register, logIn } from "@/app/redux/auth/operations";
import { redirect } from "next/navigation";
import { useAuth } from "@/app/hooks/useAuth";
import { Container } from "@mui/material";
import Auth from "@/app/components/auth/auth";
import { IFormData } from "@/app/utils/interfaces";
import Spinner from "@/app/components/spiner/spiner";

export default function Authorization() {
  authGuard();

  const [login, setLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { isLogin, isLoading } = useAuth();
  if (isLogin) redirect("/posts");

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = (userData: IFormData) => {
    dispatch(logIn(userData));
  };

  const handleRegister = (userData: IFormData) => {
    dispatch(register(userData));
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
      {isLoading ? (
        <Spinner />
      ) : (
        <Auth
          toggleAuth={handleAuthMethod}
          login={login}
          showPassword={showPassword}
          handleShowPassword={handleShowPassword}
          handleLogin={handleLogin}
          handleRegister={handleRegister}
        />
      )}
    </Container>
  );
}

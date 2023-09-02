"use client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { register, logIn, refreshUser } from "@/app/redux/auth/operations";
import { redirect } from "next/navigation";
import { useAuth } from "@/app/hooks/useAuth";
import { Container } from "@mui/material";
import Auth from "@/app/components/auth/auth";
import { IFormData } from "@/app/utils/interfaces";

export default function Authorization() {
  const [login, setLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const { isLogin } = useAuth();

  if (isLogin) redirect("/");
  console.log(isLogin);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = (userData: IFormData) => {
    console.log(userData);
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

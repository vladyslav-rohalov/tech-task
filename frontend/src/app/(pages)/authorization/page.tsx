"use client";
import { useState } from "react";
import { Container } from "@mui/material";
import Auth from "@/app/components/auth/auth";

export default function Authorization() {
  const [login, setLogin] = useState(true);

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
      <Auth toggleAuth={handleAuthMethod} login={login} />
    </Container>
  );
}

"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { refreshUser } from "@/app/redux/auth/operations";
import { AppBar, Container, Toolbar } from "@mui/material";
import Logo from "./logo/logo";
import Nav from "./nav/nav";
import PersonalAccount from "./personalAccount/personalAccount";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <AppBar
      sx={{
        position: "fixed",
        top: 0,
        direction: "flex",
        justifyContent: "center",
        height: 72,
        px: 0,
        bgcolor: "primary.main",
        zIndex: 999,
      }}
    >
      <Container maxWidth="xl" sx={{ px: 3 }}>
        <Toolbar
          style={{ padding: 0 }}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Logo />
          <Nav />
          <PersonalAccount />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

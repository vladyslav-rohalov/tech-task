"use client";
import { AppBar, Container, Toolbar } from "@mui/material";
import Logo from "./logo/logo";
import PersonalAccount from "./personalAccount/personalAccount";

export default function Header() {
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
          <PersonalAccount />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

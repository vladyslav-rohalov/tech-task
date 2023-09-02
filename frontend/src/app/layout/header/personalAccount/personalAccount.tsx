"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { IconButton, Popover, ListItemText, List } from "@mui/material";
import { ListItem, ListItemIcon, ListItemButton } from "@mui/material";
import { Typography, Box } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { logOut } from "@/app/redux/auth/operations";
import { useAuth } from "@/app/hooks/useAuth";

export default function PersonalAccount() {
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);
  const { isLogin, user } = useAuth();
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logOut());
    redirect("/");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      {isLogin && (
        <Typography component="p" variant="h5">
          Hi, {user.name}
        </Typography>
      )}
      <IconButton
        color="inherit"
        aria-label="personal account"
        onClick={handleClick}
      >
        <AccountCircleOutlinedIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List>
          {isLogin ? (
            <ListItem disablePadding onClick={handleLogout}>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          ) : (
            <>
              <ListItem disablePadding>
                <Link href="/authorization">
                  <ListItemButton>
                    <ListItemIcon>
                      <LoginIcon />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link href="/authorization">
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Register" />
                  </ListItemButton>
                </Link>
              </ListItem>
            </>
          )}
        </List>
      </Popover>
    </Box>
  );
}

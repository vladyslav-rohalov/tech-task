"use client";
import { useState } from "react";
import { IconButton, Popover, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { logOut } from "@/app/redux/auth/operations";

export default function PersonalAccount() {
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);

  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
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
        <Typography sx={{ p: 2 }} onClick={handleLogout}>
          Logout
        </Typography>
      </Popover>
    </>
  );
}

import Link from "next/link";
import { Typography, IconButton } from "@mui/material";
import LogoDevIcon from "@mui/icons-material/LogoDev";

export default function Logo() {
  return (
    <Link
      href="/"
      style={{ display: "flex", alignItems: "center", height: 40 }}
    >
      <IconButton color="inherit">
        <LogoDevIcon sx={{ fontSize: 40, mr: 1 }} />
      </IconButton>

      <Typography
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          fontSize: "30px",
          display: { xs: "none", md: "flex" },
        }}
      >
        MICRO-BLOG
      </Typography>
    </Link>
  );
}

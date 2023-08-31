import Link from "next/link";
import { Box, Container, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        bgcolor: "primary.main",
        py: 3,
      }}
      component="footer"
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#fff" }}>
          Created by Vladyslav Rohalov
        </Typography>
        <Link
          href="https://github.com/vladyslav-rohalov"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconButton sx={{ color: "#fff" }}>
            <GitHubIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Link>

        <Link
          href="https://www.linkedin.com/in/vladyslav-rohalov/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconButton sx={{ color: "#fff" }}>
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Link>
      </Container>
    </Box>
  );
}

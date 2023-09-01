import Link from "next/link";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
 
  return (
    <Container
      component="section"
      maxWidth="xl"
      sx={{
        px: 3,
        mt: 12,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography component="h1" variant="h3" sx={{ mb: 2 }}>
          Best micro blog platform for you
        </Typography>

        <Typography component="h2" variant="h5" sx={{ mb: 2 }}>
          To go further log in to the site{" "}
          <Link
            href="/authorization"
            style={{ color: "#586ba4", textDecoration: "underline" }}
          >
            Log In
          </Link>
        </Typography>

        <Image
          style={{
            position: "absolute",
            bottom: 104,
            objectFit: "cover",
          }}
          src="/home.png"
          alt="image"
          sizes="50%"
          width={300}
          height={400}
          priority
        />
      </Box>
    </Container>
  );
}

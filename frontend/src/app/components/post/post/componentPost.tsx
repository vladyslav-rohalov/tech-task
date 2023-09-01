import { Box, Divider, Typography } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

type PropTypes = {
  title: string;
  body: string;
};

export default function ComponentPost({ title, body }: PropTypes) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "60%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mb: 2,
        }}
      >
        <FaceIcon sx={{ mr: 1, color: "primary.main" }} />
        <Typography sx={{ color: "primary.main" }}>Author</Typography>
      </Box>
      <Divider />
      <Box sx={{ mr: 2 }}>
        <Typography component="p" variant="h6">
          {title}
        </Typography>
        <Typography>{body}</Typography>
      </Box>
    </Box>
  );
}

import { CircularProgress, Box } from "@mui/material";
export default function Spinner() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
}

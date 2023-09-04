import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

export default function Nav() {
  const path = usePathname();
  console.log(path);

  return (
    <Box component="nav">
      <List sx={{ display: "flex", flexDirection: "row" }}>
        <ListItem disablePadding>
          <Link href="/">
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary="Home"
                primaryTypographyProps={{
                  fontSize: "1.5rem",
                  color: path === "/" ? "primary.info" : "#fff",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/posts">
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary="Posts"
                primaryTypographyProps={{
                  fontSize: "1.5rem",
                  color: path === "/posts" ? "primary.info" : "#fff",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/authorization">
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary="LogIn"
                primaryTypographyProps={{
                  fontSize: "1.5rem",
                  color: path === "/authorization" ? "primary.info" : "#fff",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

import Link from "next/link";
// import {relocate} from 'next/navigation'
import { Typography, IconButton, Popover, ListItemText } from "@mui/material";
import { Box } from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FaceIcon from "@mui/icons-material/Face";
import { useRouter, usePathname } from "next/navigation";

interface PropTypes {
  userUrl: string;
  postUrl: string;
  popoverId: string | undefined;
  name: string | undefined;
  anchorEl: HTMLElement | null;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
  isPostOwner: boolean;
  handleDelete: any;
  handleOpenModal: any;
  setAnchorEl: any;
}

export default function UserInfo({
  userUrl,
  postUrl,
  popoverId,
  name,
  anchorEl,
  handleClick,
  setAnchorEl,
  open,
  isPostOwner,
  handleDelete,
  handleOpenModal,
}: PropTypes) {
  const path = usePathname();
  const router = useRouter();
  const pathArr = path.split("/");
  console.log(router);
  const handleRoute = () => {
    if (pathArr.includes("author")) return;
    router.push(userUrl);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        onClick={handleRoute}
      >
        <IconButton>
          <FaceIcon sx={{ mr: 1, color: "primary.main" }} />
        </IconButton>
        <Typography sx={{ color: "primary.main" }}>{name}</Typography>
      </Box>

      <IconButton onClick={handleClick} sx={{ color: "primary.light" }}>
        <MoreVertIcon />
      </IconButton>

      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <List>
          {isPostOwner ? (
            <>
              <ListItem disablePadding>
                <Link href={postUrl}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AutoStoriesIcon sx={{ color: "primary.light" }} />
                    </ListItemIcon>
                    <ListItemText primary="read more" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={handleOpenModal}>
                  <ListItemIcon>
                    <EditIcon sx={{ color: "primary.info" }} />
                  </ListItemIcon>
                  <ListItemText primary="edit" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={handleDelete}>
                  <ListItemIcon>
                    <DeleteIcon sx={{ color: "primary.hot" }} />
                  </ListItemIcon>
                  <ListItemText primary="delete" />
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <ListItem disablePadding>
              <Link href={postUrl}>
                <ListItemButton>
                  <ListItemIcon>
                    <AutoStoriesIcon sx={{ color: "primary.light" }} />
                  </ListItemIcon>
                  <ListItemText primary="read more" />
                </ListItemButton>
              </Link>
            </ListItem>
          )}
        </List>
      </Popover>
    </Box>
  );
}

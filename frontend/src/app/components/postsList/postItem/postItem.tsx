"use client";

import { useState } from "react";
import { IPost } from "@/app/utils/interfaces";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { deletePost } from "@/app/redux/posts/operations";
import { Box, Divider, IconButton, Popover } from "@mui/material";
import { Card, CardContent, Typography, ListItemText } from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemButton } from "@mui/material";
import { useAuth } from "@/app/hooks/useAuth";
import FaceIcon from "@mui/icons-material/Face";
import AddCommentIcon from "@mui/icons-material/AddComment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export default function PostItem({ post }: { post: IPost }) {
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);

  const dispatch = useDispatch<AppDispatch>();

  const { _id, title, body, owner } = post;
  const { user } = useAuth();

  const isPostOwner = () => {
    return post.owner?._id === user._id;
  };

  const cutLongText = (text: string) => {
    if (text.length > 200) {
      return text.slice(0, 199);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = () => {
    if (_id) {
      dispatch(deletePost(_id));
    }
  };

  const postUrl = "posts/" + _id;
  const userUrl = "posts/author/" + owner?._id;

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Card id={_id} sx={{ position: "relative", height: 280 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Link
            href={userUrl}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FaceIcon sx={{ mr: 1, color: "primary.main" }} />
            <Typography sx={{ color: "primary.main" }}>
              {owner?.name}
            </Typography>
          </Link>

          <IconButton onClick={handleClick} sx={{ color: "primary.light" }}>
            <MoreVertIcon />
          </IconButton>

          <Popover
            id={id}
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
              {isPostOwner() ? (
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
                    <ListItemButton>
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

        <Divider sx={{ mt: 1 }} />
        <Box>
          <Typography component="p" variant="h6">
            {title}
          </Typography>
          {body.length > 200 ? (
            <>
              <Typography>
                {cutLongText(body)}
                <Link href={postUrl} style={{ color: "#586ba4" }}>
                  {" "}
                  read more
                </Link>
              </Typography>
            </>
          ) : (
            <Typography>{body}</Typography>
          )}
        </Box>

        {user.role === "Commentator" && (
          <Box
            sx={{
              position: "absolute",
              bottom: 8,
              width: "calc(100% - 32px)",
            }}
          >
            <Divider sx={{ my: 1 }} />
            <Link
              href={postUrl}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AddCommentIcon sx={{ mr: 1, color: "primary.accent" }} />
              <Typography sx={{ color: "primary.accent" }}>
                comment post
              </Typography>
            </Link>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

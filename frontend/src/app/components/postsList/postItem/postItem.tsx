"use client";

import { useState } from "react";
import { IPost } from "@/app/utils/interfaces";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { deletePost } from "@/app/redux/posts/operations";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import { useAuth } from "@/app/hooks/useAuth";
import AddCommentIcon from "@mui/icons-material/AddComment";
import UserInfo from "./userInfo/userInfo";
import EditPostModal from "../../editModal/modal";

export default function PostItem({ post }: { post: IPost }) {
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);
  const [openModal, setOpenModal] = useState(false);

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

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const postUrl = "posts/" + _id;
  const userUrl = "posts/author/" + owner?._id;

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Card id={_id} sx={{ position: "relative", height: 280 }}>
      <CardContent>
        <UserInfo
          userUrl={userUrl}
          popoverId={id}
          name={owner?.name}
          anchorEl={anchorEl}
          handleClick={handleClick}
          handleDelete={handleDelete}
          isPostOwner={isPostOwner()}
          open={open}
          postUrl={postUrl}
          setAnchorEl={setAnchorEl}
          handleOpenModal={handleOpenModal}
        />

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
      <EditPostModal open={openModal} handleClose={handleCloseModal} post={post}/>
    </Card>
  );
}

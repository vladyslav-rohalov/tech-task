import { useState } from "react";
import { redirect } from "next/navigation";
import { Box, Divider, Typography, IconButton } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IPost, IUser } from "@/app/utils/interfaces";
import EditPostModal from "../../editModal/modal";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { deletePost } from "@/app/redux/posts/operations";

type PropTypes = {
  post: IPost;
  user: IUser;
};

export default function ComponentPost({ post, user }: PropTypes) {
  const [openModal, setOpenModal] = useState(false);
  const { owner, title, body, _id } = post;

  const dispatch = useDispatch<AppDispatch>();

  const isPostOwner = () => {
    return owner?._id === user._id;
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDelete = () => {
    if (_id) {
      dispatch(deletePost(_id));
      redirect("/posts");
    }
  };

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
          justifyContent: "space-between",
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
          <Typography sx={{ color: "primary.main" }}>{owner?.name}</Typography>
        </Box>
        {isPostOwner() && (
          <Box sx={{ mr: 2 }}>
            <IconButton onClick={handleDelete}>
              <DeleteIcon sx={{ color: "primary.hot" }} />
            </IconButton>
            <IconButton onClick={() => setOpenModal(true)}>
              <EditIcon sx={{ color: "primary.info" }} />
            </IconButton>
          </Box>
        )}
      </Box>

      <Divider />
      <Box sx={{ mr: 2 }}>
        <Typography component="p" variant="h6">
          {title}
        </Typography>
        <Typography>{body}</Typography>
      </Box>
      <EditPostModal
        open={openModal}
        handleClose={handleCloseModal}
        post={post}
      />
    </Box>
  );
}

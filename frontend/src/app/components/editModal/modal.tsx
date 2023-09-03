import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { editPost } from "@/app/redux/posts/operations";
import { Box, Typography, Modal } from "@mui/material";
import { FormControl, TextField, Button } from "@mui/material";
import { modalStyle } from "./style";
import { IPost } from "@/app/utils/interfaces";

interface PropTypes {
  open: boolean;
  handleClose: any;
  post: any;
}

export default function EditPostModal({ open, handleClose, post }: PropTypes) {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch<AppDispatch>();

  const handleEditPost = ({ title, body }: IPost) => {
    dispatch(editPost({ id: post._id, post: { title, body } }));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ ml: 2 }}
        >
          Edit post
        </Typography>
        <FormControl
          sx={{ display: "flex", width: "100%", pl: 2 }}
          component="form"
          onSubmit={handleSubmit(({ title, body }) => {
            handleEditPost({ title, body });
            reset();
          })}
        >
          <TextField
            required
            id="title"
            sx={{ mt: 2 }}
            type="text"
            defaultValue={post.title}
            {...register("title")}
          />
          <TextField
            required
            id="body"
            multiline
            fullWidth
            defaultValue={post.body}
            inputProps={{
              style: {
                height: "300px",
              },
            }}
            sx={{
              mt: 2,
            }}
            type="text"
            {...register("body")}
          />
          <Button
            variant="contained"
            sx={{ mt: 2, height: 48, bgcolor: "primary.light" }}
            type="submit"
          >
            Edit post
          </Button>
        </FormControl>
      </Box>
    </Modal>
  );
}

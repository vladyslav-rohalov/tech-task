import { useForm } from "react-hook-form";
import { Box, Divider, Typography, IconButton } from "@mui/material";
import { FormControl, TextField, InputAdornment } from "@mui/material";
import { Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FaceIcon from "@mui/icons-material/Face";
import { IComment, IPost } from "@/app/utils/interfaces";
import { useAuth } from "@/app/hooks/useAuth";

interface PropsTypes {
  post: IPost;
  handleSendComment: ({
    comment,
    parentPost,
  }: {
    comment: IComment;
    parentPost: string | undefined;
  }) => void;
}

export default function ComponentComment({
  post,
  handleSendComment,
}: PropsTypes) {
  const { comments, _id } = post;
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "40%",
      }}
    >
      <Typography sx={{ color: "primary.main", mb: 2, mx: 2 }}>
        Comments
      </Typography>
      <Divider />
      <Box sx={{ maxHeight: "60%", overflowY: "auto" }}>
        {comments &&
          comments.map((item) => {
            return (
              <Paper key={item._id} sx={{ ml: 2, my: 1, p: 1 }}>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <FaceIcon sx={{ color: "primary.hot" }} />
                  <Typography sx={{ ml: 1 }}>{item?.owner?.name}</Typography>
                </Box>
                <Divider />
                <Typography sx={{ mt: 1 }}>{item.comment}</Typography>
              </Paper>
            );
          })}
      </Box>
      {user.role === "Commentator" && (
        <FormControl
          sx={{
            position: "absolute",
            bottom: 0,
            width: "calc(100% - 16px)",
            mx: 2,
          }}
          component="form"
          onSubmit={handleSubmit(({ comment }) => {
            handleSendComment({ comment, parentPost: _id }), reset();
          })}
        >
          <TextField
            id="comment"
            label="Comment"
            sx={{ mt: 2 }}
            type="text"
            {...register("comment")}
            multiline
            inputProps={{
              style: {
                height: "100px",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="send message" type="submit">
                    <SendIcon sx={{ color: "primary.light" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      )}
    </Box>
  );
}

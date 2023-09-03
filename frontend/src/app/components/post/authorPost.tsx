import { Card, CardContent, Divider } from "@mui/material";
import { IPost, IComment } from "@/app/utils/interfaces";
import ComponentPost from "./post/componentPost";
import ComponentComment from "./comment/componentComment";

interface PropsTypes {
  post: IPost;
  comments: IComment[];
  handleSendComment: (comment: IComment) => void;
}

export default function AuthorPost({
  post,
  comments,
  handleSendComment,
}: PropsTypes) {
  const { title, body } = post;

  return (
    <Card sx={{ height: 500, my: 4 }}>
      <CardContent
        sx={{ display: "flex", flexDirection: "row", height: "100%" }}
      >
        <ComponentPost title={title} body={body} />
        <Divider orientation="vertical" flexItem />
        <ComponentComment
          comments={comments}
          handleSendComment={handleSendComment}
        />
      </CardContent>
    </Card>
  );
}

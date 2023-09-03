import { Card, CardContent, Divider } from "@mui/material";
import { IPost, IComment, IUser } from "@/app/utils/interfaces";
import ComponentPost from "./post/componentPost";
import ComponentComment from "./comment/componentComment";

interface PropsTypes {
  post: IPost;
  user: IUser;
  handleSendComment: ({
    comment,
    parentPost,
  }: {
    comment: IComment;
    parentPost: string | undefined;
  }) => void;
}

export default function AuthorPost({
  post,
  user,
  handleSendComment,
}: PropsTypes) {
  return (
    <>
      {post && (
        <Card sx={{ height: 500, my: 4 }}>
          <CardContent
            sx={{ display: "flex", flexDirection: "row", height: "100%" }}
          >
            <ComponentPost post={post} user={user} />
            <Divider orientation="vertical" flexItem />
            <ComponentComment
              handleSendComment={handleSendComment}
              post={post}
            />
          </CardContent>
        </Card>
      )}
    </>
  );
}

import { IPost } from "@/app/utils/interfaces";
import Link from "next/link";
import { Box, Divider } from "@mui/material";
import { Card, CardContent, Typography } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import AddCommentIcon from "@mui/icons-material/AddComment";

export default function PostItem({ post }: { post: IPost }) {
  const { _id, title, body, owner } = post;
  console.log(post);
  const cutLongText = (text: string) => {
    if (text.length > 200) {
      return text.slice(0, 199);
    }
  };

  const postUrl = "posts/" + _id;
  const userUrl = "posts/author/" + _id;

  return (
    <Card id={_id} sx={{ position: "relative", height: 280 }}>
      <CardContent>
        <Link
          href={userUrl}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FaceIcon sx={{ mr: 1, color: "primary.main" }} />
          <Typography sx={{ color: "primary.main" }}>{owner?.name}</Typography>
        </Link>

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
      </CardContent>
    </Card>
  );
}

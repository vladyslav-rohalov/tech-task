import { IPosts } from "@/app/utils/interfaces";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import PostItem from "./postItem/postItem";

interface PropsTypes {
  posts: IPosts[];
}

export default function PostsList({ posts }: PropsTypes) {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        component="ul"
        container
        rowSpacing={{ xs: 2, sm: 2, md: 3 }}
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        sx={{ listStyle: "none", mb: 4 }}
      >
        {posts &&
          posts.map((post) => {
            return (
              <Grid xs={12} sm={6} md={4} lg={3} key={post.id} component="li">
                <PostItem post={post} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}

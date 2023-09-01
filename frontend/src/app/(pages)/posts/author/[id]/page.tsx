"use client";
import { useParams, usePathname } from "next/navigation";
import { Container, Typography } from "@mui/material";
import PostsList from "@/app/components/postsList/posts";
import { posts } from "@/app/utils/tmpData";
import Breadcrumbs from "@/app/layout/breacrumbs/breadcrumbs";

//need to add Author posts
export default function AuthorFeed() {
  const { id } = useParams();
  const path = usePathname().split("/");
  path.splice(0, 1);

  return (
    <Container
      component="section"
      maxWidth="xl"
      sx={{
        px: 3,
        mt: 12,
      }}
    >
      <Breadcrumbs crumbs={path} />
      <Typography component="h1" variant="h3" sx={{ mb: 2 }}>
        Posts
      </Typography>
      <PostsList posts={posts} />
    </Container>
  );
}

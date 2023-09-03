"use client";

import { useParams, redirect } from "next/navigation";
import { Container, Typography } from "@mui/material";
import PostsList from "@/app/components/postsList/posts";
import { usePosts } from "@/app/hooks/usePosts";
import { IPost } from "@/app/utils/interfaces";
import { useAuth } from "@/app/hooks/useAuth";

export default function AuthorFeed() {
  const { isLoading } = useAuth();
  if (isLoading) redirect("/authorization");

  const { posts } = usePosts();
  const { id } = useParams();

  const authorPosts = posts.filter((post: IPost) => post.owner?._id === id);

  return (
    <Container
      component="section"
      maxWidth="xl"
      sx={{
        px: 3,
        mt: 12,
      }}
    >
      <Typography component="h1" variant="h3" sx={{ mb: 2 }}>
        Posts
      </Typography>
      <PostsList posts={authorPosts} />
    </Container>
  );
}

"use client";

import authGuard from "@/app/utils/authGuard";
import { useParams, usePathname } from "next/navigation";
import { Container, Typography } from "@mui/material";
import PostsList from "@/app/components/postsList/posts";
import { usePosts } from "@/app/hooks/usePosts";
import Breadcrumbs from "@/app/layout/breacrumbs/breadcrumbs";
import { IPost } from "@/app/utils/interfaces";

export default function AuthorFeed() {
  authGuard();
  const { posts } = usePosts();
  const { id } = useParams();

  const authorPosts = posts.filter((post: IPost) => post.owner?._id === id);

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
      <PostsList posts={authorPosts} />
    </Container>
  );
}

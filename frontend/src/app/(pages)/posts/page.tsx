"use client";

import authGuard from "@/app/utils/authGuard";
import { Container, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import Breadcrumbs from "@/app/layout/breacrumbs/breadcrumbs";
import PostsList from "@/app/components/postsList/posts";
import CreatePost from "@/app/components/createPost/createPost";
import { IPost } from "@/app/utils/interfaces";
import { posts } from "../../utils/tmpData";

export default function Posts() {
  authGuard();

  const path = usePathname().split("/");
  path.splice(0, 1);

  const handleComment = (data: IPost) => {
    // qweqweqweqewq
  };

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
      <CreatePost handleComment={handleComment} />
      <PostsList posts={posts} />
    </Container>
  );
}

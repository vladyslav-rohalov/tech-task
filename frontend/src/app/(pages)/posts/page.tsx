"use client";

import authGuard from "@/app/utils/authGuard";
import { useAuth } from "@/app/hooks/useAuth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { fetchPosts, addPost } from "@/app/redux/posts/operations";
import { usePosts } from "@/app/hooks/usePosts";
import { Container, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import Breadcrumbs from "@/app/layout/breacrumbs/breadcrumbs";
import PostsList from "@/app/components/postsList/posts";
import CreatePost from "@/app/components/createPost/createPost";
import { IPost } from "@/app/utils/interfaces";
//need to add scroll into post body input
export default function Posts() {
  authGuard();
  const dispatch = useDispatch<AppDispatch>();

  const { posts } = usePosts();
  const { user } = useAuth();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const path = usePathname().split("/");
  path.splice(0, 1);

  const handleAddPost = (data: IPost) => {
    dispatch(addPost(data));
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
      {user?.role === "Author" && <CreatePost handleAddPost={handleAddPost} />}
      <PostsList posts={posts} />
    </Container>
  );
}

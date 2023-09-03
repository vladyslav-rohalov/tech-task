"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { fetchPosts, addPost } from "@/app/redux/posts/operations";
import { usePosts } from "@/app/hooks/usePosts";
import { Container, Typography } from "@mui/material";
import PostsList from "@/app/components/postsList/posts";
import CreatePost from "@/app/components/createPost/createPost";
import { IPost } from "@/app/utils/interfaces";
import Spinner from "@/app/components/spiner/spiner";
import { redirect } from "next/navigation";

export default function Posts() {
  const { user, isLoading } = useAuth();
  if (isLoading) redirect("/authorization");

  const dispatch = useDispatch<AppDispatch>();

  const { posts, isLoadingPosts } = usePosts();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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
      {isLoadingPosts ? (
        <Spinner />
      ) : (
        <>
          <Typography component="h1" variant="h3" sx={{ mb: 2 }}>
            Posts
          </Typography>
          {user?.role === "Author" && (
            <CreatePost handleAddPost={handleAddPost} />
          )}
          <PostsList posts={posts} />
        </>
      )}
    </Container>
  );
}

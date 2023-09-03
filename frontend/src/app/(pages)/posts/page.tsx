"use client";

import authGuard from "@/app/utils/authGuard";
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

export default function Posts() {
  authGuard();

  const dispatch = useDispatch<AppDispatch>();

  const { posts, isLoading } = usePosts();
  const { user } = useAuth();

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
      {isLoading ? (
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

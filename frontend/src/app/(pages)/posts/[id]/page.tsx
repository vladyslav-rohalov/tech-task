"use client";

import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { addComment } from "@/app/redux/posts/operations";
import { Container } from "@mui/material";
import AuthorPost from "@/app/components/post/authorPost";
import { usePosts } from "@/app/hooks/usePosts";
import { useAuth } from "@/app/hooks/useAuth";
import { IPost, IComment } from "@/app/utils/interfaces";
import { redirect } from "next/navigation";

export default function Post() {
  const { user, isLoading } = useAuth();
  if (isLoading) redirect("/authorization");

  const dispatch = useDispatch<AppDispatch>();

  const { posts } = usePosts();
  const { id } = useParams();

  const authorPost = posts.find((post: IPost) => post._id === id);

  const handleSendComment = ({
    comment,
    parentPost,
  }: {
    comment: IComment;
    parentPost: string | undefined;
  }) => {
    dispatch(
      addComment({
        comment,
        parentPost,
      })
    );
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
      <AuthorPost
        post={authorPost}
        handleSendComment={handleSendComment}
        user={user}
      />
    </Container>
  );
}

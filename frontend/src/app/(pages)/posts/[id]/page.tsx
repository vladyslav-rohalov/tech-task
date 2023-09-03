"use client";

import authGuard from "@/app/utils/authGuard";
import { useParams, usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { addComment } from "@/app/redux/posts/operations";
import { Container } from "@mui/material";
import AuthorPost from "@/app/components/post/authorPost";
import { usePosts } from "@/app/hooks/usePosts";
import { useAuth } from "@/app/hooks/useAuth";
import Breadcrumbs from "@/app/layout/breacrumbs/breadcrumbs";
import { IPost, IComment } from "@/app/utils/interfaces";

export default function Post() {
  authGuard();

  const dispatch = useDispatch<AppDispatch>();

  const { posts } = usePosts();
  const { user } = useAuth();
  const { id } = useParams();

  const authorPost = posts.find((post: IPost) => post._id === id);

  const path = usePathname().split("/");
  path.splice(0, 1);

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
      <Breadcrumbs crumbs={path} />
      <AuthorPost post={authorPost} handleSendComment={handleSendComment} user={user}/>
    </Container>
  );
}

"use client";

import authGuard from "@/app/utils/authGuard";
import { useParams, usePathname } from "next/navigation";
import { Container } from "@mui/material";
import AuthorPost from "@/app/components/post/authorPost";
import { usePosts } from "@/app/hooks/usePosts";
import { comments } from "@/app/utils/tmpData";
import Breadcrumbs from "@/app/layout/breacrumbs/breadcrumbs";
import { IPost, IComment } from "@/app/utils/interfaces";

export default function Post() {
  authGuard();
  const { posts } = usePosts();
  const { id } = useParams();

  const authorPost = posts.find((post: IPost) => post._id === id);

  const path = usePathname().split("/");
  path.splice(0, 1);

  const handleSendComment = (comment: IComment) => {
    console.log(comment);
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
      <AuthorPost
        post={authorPost}
        comments={comments}
        handleSendComment={handleSendComment}
      />
    </Container>
  );
}

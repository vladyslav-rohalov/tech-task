"use client";
import { useParams, usePathname } from "next/navigation";
import { Container } from "@mui/material";
import AuthorPost from "@/app/components/post/authorPost";
import { posts } from "@/app/utils/tmpData";
import { comments } from "@/app/utils/tmpData";
import Breadcrumbs from "@/app/layout/breacrumbs/breadcrumbs";

export default function Post() {
  const { id } = useParams();
  const path = usePathname().split("/");
  path.splice(0, 1);
  const post = posts.find((n) => n.id === id);

  const handleSendComment = (comment) => {
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
        post={post}
        comments={comments}
        handleSendComment={handleSendComment}
      />
    </Container>
  );
}

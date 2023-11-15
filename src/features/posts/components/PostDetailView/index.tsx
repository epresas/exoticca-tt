import React from "react";
import PostDetailEditForm from "./PostDetailEditForm";
import PostDetail from "./PostDetail";
import usePostDetail from "./usePostDetail";

interface PostDetailViewProps {
  mode?: "view" | "edit";
}

const PostDetailView: React.FC<PostDetailViewProps> = ({ mode = "view" }) => {
  const {
    state: { data: post },
  } = usePostDetail();

  if (!post) return <div>Post not found</div>;

  return (
    <>
      {mode === "edit" ? (
        <PostDetailEditForm post={post} />
      ) : (
        <PostDetail post={post} />
      )}
    </>
  );
};

export default PostDetailView;

// features/posts/PostDetailView.tsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usePostsQuery } from "@features/posts/api";
import { Post } from "@features/posts/domain/types";
import PostDetailForm from "./PostDetailEditView/PostDetailEditForm";

const PostDetailView: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const handleEdit = () => {
    setEditMode(true);
  };
  const { id } = useParams();
  const { data: posts } = usePostsQuery(0, 100);

  if (!posts) return null;

  const post: Post | undefined = posts.find(
    (p: Post) => p.id.toString() === id
  );

  if (!post) return <div>Post not found</div>;

  return (
    <>
      {editMode ? null : (
        // <PostDetailForm post={post} />
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
      <button onClick={handleEdit}>Edit</button>
    </>
  );
};

export default PostDetailView;

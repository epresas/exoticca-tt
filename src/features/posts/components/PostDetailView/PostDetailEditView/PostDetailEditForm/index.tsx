// features/posts/PostDetailForm.tsx
import React from "react";
import { useForm } from "react-hook-form";

interface PostFormProps {
  onSubmit: (data: any) => void;
  defaultValues: Record<string, any>;
}

const PostDetailForm: React.FC<PostFormProps> = ({
  onSubmit,
  defaultValues,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Title:
        <input {...register("title")} />
      </label>
      <label>
        Body:
        <textarea {...register("body")} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostDetailForm;

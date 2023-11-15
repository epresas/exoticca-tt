import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { Post, PostFormValues } from "../../domain/types";
import { getPostDetailEditValidationSchema } from "src/utils/validationSchemas/postEditValidationSchema";
import { updatePost, usePostQuery } from "../../api";

const usePostDetail = (post?: Post) => {
  const defaultValues: PostFormValues = {
    title: post?.title || "",
    body: post?.body || "",
  };

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues,
    resolver: yupResolver(getPostDetailEditValidationSchema),
  });
  // get the post id from the url
  const { id: postId } = useParams();

  // get the post from the api
  const { data, isLoading } = usePostQuery(parseInt(postId!));

  const navigate = useNavigate();

  const handleSubmitPost = async (data: PostFormValues) => {
    const postId = post?.id;
    try {
      if (!postId) {
        throw new Error("No post ID provided.");
      }
      await updatePost(postId, data);
      navigate("/posts");
    } catch (error) {
      console.error("Failed to update post:", error);
    }
  };

  const handleClose = () => {
    navigate("/posts");
  };

  return {
    state: { control, errors, data, isLoading, isDirty },
    actions: { handleSubmit, handleSubmitPost, handleClose },
  };
};

export default usePostDetail;

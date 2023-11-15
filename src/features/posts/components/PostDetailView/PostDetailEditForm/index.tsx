import React from "react";
import { Controller } from "react-hook-form";
import usePostDetail from "../usePostDetail";
import { Post } from "@features/posts/domain/types";
import {
  AcceptButton,
  CloseButton,
  Footer,
  Form,
  FormField,
  Container,
  FormFieldWrapper,
  Header,
  Title,
} from "./PostDetailEditForm.styles";

interface PostDetailEditFormProps {
  post: Post;
}

const PostDetailEditForm: React.FC<PostDetailEditFormProps> = ({ post }) => {
  const {
    state: { control, errors, isDirty },
    actions: { handleSubmit, handleSubmitPost, handleClose },
  } = usePostDetail(post);

  return (
    <Container>
      <Header>
        <Title>Edit post</Title>
      </Header>
      <Form onSubmit={handleSubmit(handleSubmitPost)}>
        <FormFieldWrapper>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormField
                {...field}
                error={!!errors.title}
                helperText={errors.title?.message}
                label="Title"
              />
            )}
          />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <Controller
            name="body"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormField
                {...field}
                error={!!errors.body}
                helperText={errors.body?.message}
                label="Body"
              />
            )}
          />
        </FormFieldWrapper>
        <Footer>
          <AcceptButton disabled={!isDirty} type="submit">
            Accept
          </AcceptButton>
          <CloseButton type="button" onClick={handleClose}>
            Close
          </CloseButton>
        </Footer>
      </Form>
    </Container>
  );
};

export default PostDetailEditForm;

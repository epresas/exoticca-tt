import * as yup from "yup";

export const getPostDetailEditValidationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  body: yup.string().required("Content is required"),
});

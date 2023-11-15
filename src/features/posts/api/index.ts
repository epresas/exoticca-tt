import { QueryFunctionContext, useMutation, useQuery } from "react-query";
type TParams = { page?: number; limit?: number; postId?: number };
type TQueryContext = QueryFunctionContext<["posts" | "post", TParams]>;
const API_BASE_URL = "https://jsonplaceholder.typicode.com/posts";

/**
 * Retrieves a list of posts from a remote API.
 * @param queryKey - An object containing the query parameters.
 * @returns A Promise that resolves to an array of posts.
 */
export const getPosts = async ({ queryKey }: TQueryContext) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { page, limit }] = queryKey;

  const url = `${API_BASE_URL}${page !== undefined ? `?_page=${page}` : ""}${
    limit !== undefined && page !== undefined ? `&_limit=${limit}` : ""
  }`;
  const response = await fetch(url);
  return response.json();
};

export const usePostsQuery = (
  page?: number,
  limit?: number,
  postId?: number
) => {
  return useQuery({
    queryKey: ["posts", { page, limit, postId }],
    queryFn: getPosts,
  });
};

// create function to get single post
const getPost = async ({ queryKey }: TQueryContext) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { postId }] = queryKey;
  const response = await fetch(`${API_BASE_URL}/${postId}`);
  return response.json();
};

// create query for single post
export const usePostQuery = (postId?: number) => {
  return useQuery({
    queryKey: ["post", { postId }],
    queryFn: getPost,
  });
};

/**
 * Updates a post with the given ID. Note to reviewer: this is a fake API call * since jasonplaceholder doesn't allow modifying their data.
 * @param postId - The ID of the post to update.
 * @param data - The data to update the post with.
 * @returns A Promise that resolves to the updated post.
 */
export const updatePost = async (
  postId: number,
  data: Record<string, unknown>
) => {
  console.log(postId, data);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  return response.json();
};

export const useUpdatePostMutation = () => {
  return useMutation(updatePost);
};

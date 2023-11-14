import { QueryFunctionContext, useQuery } from "react-query";
type TParams = { page: number; limit?: number };
type TQueryContext = QueryFunctionContext<["posts", TParams]>;
export const getPosts = async ({ queryKey }: TQueryContext) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { page = 0, limit }] = queryKey;
  let url = `https://jsonplaceholder.typicode.com/posts?_page=${page}`;
  if (limit !== undefined) {
    url += `&_limit=${limit}`;
  }
  const response = await fetch(url);
  return response.json();
};

export const usePostsQuery = (page: number, limit?: number) => {
  return useQuery(["posts", { page, limit }], getPosts);
};

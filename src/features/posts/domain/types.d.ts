export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostFormValues = {
  title: string;
  body: string;
};

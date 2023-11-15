import { render } from "@utils/test-utils";
import { Post } from "../../../domain/types";
import PostDetail from "./index";

describe("PostDetail", () => {
  const mockPost: Post = {
    id: 1,
    title: "Test Post",
    body: "Test content",
    userId: 1,
  };

  it("should render the post title and body", () => {
    const { getByText } = render(<PostDetail post={mockPost} />);
    expect(getByText(mockPost.title)).toBeInTheDocument();
    expect(getByText(mockPost.body)).toBeInTheDocument();
  });
});

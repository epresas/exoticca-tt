import { Post } from "@features/posts/domain/types";
import {
  Container,
  Header,
  Title,
  Body,
  Text,
  ActionButton,
  Footer,
} from "./PostDetail.styles";
import usePostDetail from "../usePostDetail";
type PostDetailProps = {
  post: Post;
};
const PostDetail = ({ post }: PostDetailProps) => {
  const {
    actions: { handleClose },
  } = usePostDetail(post);
  return (
    <Container>
      <Header>
        <Title>{post.title}</Title>
      </Header>
      <Body>
        <Text>{post.body}</Text>
      </Body>
      <Footer>
        <ActionButton onClick={handleClose}>Close</ActionButton>
      </Footer>
    </Container>
  );
};

export default PostDetail;

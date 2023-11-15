import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePostsQuery } from "../../api";
import Table from "@components/common/Table";
import LoadingSpinner from "src/components/common/LoadingSpinner";
import SubHeader from "./components/SubHeader";
import { Post } from "../../domain/types";
import { Container, Header } from "./PostListView.styles";
const COLUMNS = ["id", "title", "body", "actions"];

const PostListView: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [filter, setFilter] = useState("");
  const filteredData = useRef<Post[]>([]);

  const { data: posts, isLoading, refetch } = usePostsQuery(currentPage, 20);

  const filterData = useCallback(() => {
    if (filter) {
      const filteredPosts = posts?.filter((post: Post) =>
        post.title.toLowerCase().trim().includes(filter.toLowerCase().trim())
      );
      if (filteredPosts) {
        filteredData.current = filteredPosts;
        setCurrentPage(0);
        refetch();
      }
    } else {
      filteredData.current = posts || [];
    }
  }, [filter, posts, refetch]);

  useEffect(() => {
    filterData();
  }, [filter, filterData]);

  if (!posts) return null;

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <Container>
      <Header>
        <SubHeader filter={filter} setFilter={setFilter} />
      </Header>
      <Table
        data={filter ? filteredData.current : posts}
        columns={COLUMNS}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default PostListView;

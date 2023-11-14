import React from "react";
import { usePostsQuery } from "../../api";
import Table from "@components/common/Table";
import LoadingSpinner from "src/components/common/LoadingSpinner";
const COLUMNS = ["id", "title", "body"];

const PostListView: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(0);

  const { data: posts, isLoading } = usePostsQuery(currentPage, 20);

  if (!posts) return null;

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <Table
      data={posts}
      columns={COLUMNS}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default PostListView;

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import LoadingSpinner from "./components/common/LoadingSpinner";
import MainLayout from "@components/layouts/MainLayout";

const PostListView = lazy(() => import("@features/posts"));
const PostDetailView = lazy(
  () => import("@features/posts/components/PostDetailView")
);

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <PostListView />
        </Suspense>
      ),
    },
    {
      path: "posts",
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <PostListView />
            </Suspense>
          ),
        },
        {
          path: ":id",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <PostDetailView mode="view" />
            </Suspense>
          ),
        },
        {
          path: ":id/edit",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <PostDetailView mode="edit" />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <MainLayout>{routes}</MainLayout>;
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;

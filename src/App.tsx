import { lazy, Suspense } from "react";
import { Outlet, BrowserRouter as Router, useRoutes } from "react-router-dom";
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
              <PostDetailView />
            </Suspense>
          ),
        },
      ],
    },
    // otras rutas aquí
  ]);

  return <MainLayout>{routes}</MainLayout>;
};

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;

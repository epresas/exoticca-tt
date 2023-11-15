import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import { QueryClient, QueryClientProvider } from "react-query";
import usePostDetail from "./usePostDetail";
import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Post } from "../../domain/types";

describe("usePostDetail", () => {
  const queryClient = new QueryClient();
  const mockPost = { id: "1", title: "Test Post", body: "Test content" };
  const mockUpdatePost = vi.fn();
  const mockNavigate = vi.fn();
  vi.mock("react-router-dom", async (importOriginal) => {
    const mod = await importOriginal<typeof import("react-router-dom")>();
    return {
      ...mod,
      useNavigate: () => vi.fn(),
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return default values when no post is provided", () => {
    const wrapper = ({ children }: { children: ReactNode }) => {
      return (
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>{children}</BrowserRouter>
        </QueryClientProvider>
      );
    };
    const { result } = renderHook(() => usePostDetail(), { wrapper });

    expect(result.current.state.control).toBeDefined();
    expect(result.current.state.errors).toBeDefined();
    expect(result.current.state.data).toBeUndefined();
    expect(result.current.state.isDirty).toBeFalsy();
    expect(result.current.actions.handleSubmit).toBeDefined();
    expect(result.current.actions.handleSubmitPost).toBeDefined();
    expect(result.current.actions.handleClose).toBeDefined();
  });

  it("should return default values when no post is provided", () => {
    const wrapper = ({ children }: { children: ReactNode }) => {
      return (
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>{children}</BrowserRouter>
        </QueryClientProvider>
      );
    };
    const { result } = renderHook(() => usePostDetail(), { wrapper });

    expect(result.current.state.control).toBeDefined();
    expect(result.current.state.errors).toBeDefined();
    expect(result.current.state.isDirty).toBeFalsy();
    expect(result.current.actions.handleSubmit).toBeDefined();
    expect(result.current.actions.handleSubmitPost).toBeDefined();
    expect(result.current.actions.handleClose).toBeDefined();
  });

  it.skip("should update post and navigate to /posts", async () => {
    const wrapper = ({ children }: { children: ReactNode }) => {
      return (
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>{children}</BrowserRouter>
        </QueryClientProvider>
      );
    };

    const { result } = renderHook(
      () => usePostDetail(mockPost as unknown as Post),
      { wrapper }
    );

    await act(async () => {
      result.current.actions.handleSubmitPost({
        title: "New Title",
        body: "New content",
      });
      await waitFor(() => result.current.state.data !== undefined);
    });

    expect(mockUpdatePost).toHaveBeenCalledWith(mockPost.id, {
      title: "New Title",
      body: "New content",
    });
    expect(mockNavigate).toHaveBeenCalledWith("/posts");
  });
});

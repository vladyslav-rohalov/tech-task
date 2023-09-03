import { useSelector } from "react-redux";
import {
  selectPosts,
  selectIsError,
  selectIsLoading,
} from "../redux/posts/selectors";

export const usePosts = () => {
  const posts = useSelector(selectPosts);
  const isLoadingPosts = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return { posts, isLoadingPosts, isError };
};

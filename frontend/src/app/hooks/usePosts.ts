import { useSelector } from "react-redux";
import {
  selectPosts,
  selectIsError,
  selectIsLoading,
} from "../redux/posts/selectors";

export const usePosts = () => {
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return { posts, isLoading, isError };
};

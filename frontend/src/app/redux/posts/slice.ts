import { createSlice } from "@reduxjs/toolkit";
import { IPostsState, IComment, IPost } from "@/app/utils/interfaces";
import {
  fetchPosts,
  addPost,
  editPost,
  deletePost,
  addComment,
  deleteComment,
} from "./operations";

interface PostAction<T> {
  type: string;
  payload?: T;
}

const initialState: IPostsState = {
  items: [],
  isError: null,
  isLoading: false,
};

const failureReducer = (state: IPostsState, action: PostAction<any>) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const pendingReducer = (state: IPostsState) => {
  state.isLoading = true;
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, pendingReducer)
      .addCase(fetchPosts.rejected, failureReducer)
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.isError = null;
      })

      .addCase(addPost.pending, pendingReducer)
      .addCase(addPost.rejected, failureReducer)
      .addCase(addPost.fulfilled, (state, action) => {
        const newPost = action.payload as IPost;
        state.items.push(newPost);
        state.isLoading = false;
        state.isError = null;
      })

      .addCase(editPost.pending, pendingReducer)
      .addCase(editPost.rejected, failureReducer)
      .addCase(editPost.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (post) => post._id === action.payload._id
        );
        state.items[index] = action.payload;
      })

      .addCase(deletePost.pending, pendingReducer)
      .addCase(deletePost.rejected, failureReducer)
      .addCase(deletePost.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (post) => post._id === action.payload
        );
        state.items.splice(index, 1);
      })

      .addCase(addComment.pending, pendingReducer)
      .addCase(addComment.rejected, failureReducer)
      .addCase(addComment.fulfilled, (state, action) => {
        const updatedPost = action.payload as IPost;
        const index = state.items.findIndex(
          (post) => post._id === updatedPost._id
        );
        state.items[index] = updatedPost;
        state.isLoading = false;
        state.isError = null;
      })

      .addCase(deleteComment.pending, pendingReducer)
      .addCase(deleteComment.rejected, failureReducer)
      .addCase(deleteComment.fulfilled, (state, action) => {
        const newComment = action.payload as IComment;
        const post = state.items.find((n) => n._id === newComment.parentPost);
        if (post) {
          if (!post.comments) {
            post.comments = [];
          }
          const index = post.comments.findIndex(
            (comment) => comment._id === action.payload._id
          );
          if (index !== -1) {
            post.comments.splice(index, 1);
          }
        }
      });
  },
});

export default postsSlice.reducer;

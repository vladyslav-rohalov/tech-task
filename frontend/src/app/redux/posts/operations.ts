import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPost, IComment } from "@/app/utils/interfaces";

axios.defaults.baseURL = "http://localhost:3001/";

export const fetchPosts = createAsyncThunk(
  "posts/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/posts");
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const fetchAllUserPosts = createAsyncThunk(
//   "posts/getAllUserPosts",
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.get(`api/posts/user/${id}`);
//       return response.data;
//     } catch (e: any) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const fetchPostById = createAsyncThunk(
//   "posts/getOne",
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.get(`/api/posts${id}`);
//       return response.data;
//     } catch (e: any) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const addPost = createAsyncThunk(
  "posts/add",
  async (post: IPost, thunkAPI) => {
    try {
      const response = await axios.post("/api/posts", post);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/edit",
  async ({ id, post }: { id: number; post: IPost }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/posts/${id}`, post);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/delete",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/posts/${id}`);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addComment = createAsyncThunk(
  "comment/add",
  async (comment: IComment, thunkAPI) => {
    try {
      const response = await axios.post("/api/comment", comment);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editComment = createAsyncThunk(
  "comment/edit",
  async ({ id, comment }: { id: string; comment: IComment }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/comment/${id}`, comment);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comment/delete",
  async ({ id }: { id: string }, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/comment/${id}`);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

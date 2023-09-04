import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPost, IComment } from "@/app/utils/interfaces";
import Notiflix from "notiflix";

Notiflix.Notify.init({
  position: "center-center",
});

axios.defaults.baseURL = "https://teck-task-bakend.onrender.com/";

export const fetchPosts = createAsyncThunk(
  "posts/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/posts");
      return response.data;
    } catch (e: any) {
      Notiflix.Notify.failure(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addPost = createAsyncThunk(
  "posts/add",
  async (post: IPost, thunkAPI) => {
    try {
      const response = await axios.post("/api/posts", post);
      Notiflix.Notify.success("New post successfully added");
      return response.data;
    } catch (e: any) {
      Notiflix.Notify.failure(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/edit",
  async ({ id, post }: { id: string; post: IPost }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/posts/${id}`, post);
      Notiflix.Notify.success("Post successfully edited");
      return response.data;
    } catch (e: any) {
      Notiflix.Notify.failure(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/delete",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/posts/${id}`);
      Notiflix.Notify.success("Post successfully deleted");
      return response.data;
    } catch (e: any) {
      Notiflix.Notify.failure(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addComment = createAsyncThunk(
  "comment/add",
  async (
    {
      comment,
      parentPost,
    }: { comment: IComment; parentPost: string | undefined },
    thunkAPI
  ) => {
    try {
      const response = await axios.post("/api/comment", {
        comment,
        parentPost,
      });
      Notiflix.Notify.success("New comment successfully added");
      return response.data;
    } catch (e: any) {
      Notiflix.Notify.failure(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comment/delete",
  async ({ id }: { id: string }, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/comment/${id}`);
      Notiflix.Notify.success("Comment successfully deleted");
      return response.data;
    } catch (e: any) {
      Notiflix.Notify.failure(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

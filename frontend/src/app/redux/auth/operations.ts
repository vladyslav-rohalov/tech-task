import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IFormData } from "@/app/utils/interfaces";
import { RootState } from "@/app/utils/interfaces";

axios.defaults.baseURL = "https://teck-task-bakend.onrender.com/";

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "users/register",
  async (userData: IFormData, thunkAPI) => {
    try {
      const response = await axios.post("/users/register", userData);
      token.set(response.data.token);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "users/login",
  async (userData: IFormData, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", userData);
      token.set(response.data.token);

      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk("users/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    token.set("");
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState;
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      token.set(persistedToken);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";
import postsSlice from "./posts/slice";
import storage from "redux-persist/lib/storage";
import { IAuthState, IPostsState } from "../utils/interfaces";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer<IAuthState>(authPersistConfig, authSlice),
    posts: postsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export interface RootState {
  auth: IAuthState;
  posts: IPostsState;
}

// export type RootState = ReturnType<typeof store.getState>;

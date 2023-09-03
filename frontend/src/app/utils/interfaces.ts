export interface IFormData {
  name?: string;
  email: string;
  role?: string;
  password: string;
}

export interface IComment {
  comment: string;
  parentPost?: string;
  owner?: string;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IPost {
  _id?: string;
  title: string;
  body: string;
  comments?: IComment[];
  // owner?: string;
  owner?: {
    _id: string;
    name: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface IPostsState {
  items: IPost[];
  isError: string | null;
  isLoading: boolean;
}

export interface IUser {
  name: string;
  email: string;
  role: string;
}

export interface IAuthState {
  user: IUser | null;
  token: string | null;
  isLogin: boolean;
  isError: string | null;
  isLoading: boolean;
}

export interface RootState {
  auth: IAuthState;
  posts: IPostsState;
}

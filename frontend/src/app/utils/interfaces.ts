export interface IFormData {
  name?: string;
  email: string;
  role?: string;
  password: string;
}

export interface IPosts {
  id: string;
  title: string;
  body: string;
}

export interface IPost {
  title: string;
  body: string;
}

export interface IComment {
  comment: string;
}

export interface IComments {
  id: string;
  comment: string;
  name: string;
}

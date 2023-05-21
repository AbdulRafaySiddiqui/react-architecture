export interface UserState {
  user: User;
  loading: boolean;
}

export interface User {
  name: string;
  email: string;
  image?: string;
}

export interface UserType {
  id: number;
  name: string;
  email: string;
}

export interface AuthResponseType {
  user: UserType;
  accessToken: string;
}

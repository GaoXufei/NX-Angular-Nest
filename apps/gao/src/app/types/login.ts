export interface Login {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  token: string;
  username: string;
}

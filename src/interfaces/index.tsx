export interface IUser {
  email: string;
  password: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  retypePassword: string;
}

export interface IConfig {
  Host: string;
  Port: string;
}
export interface JwtProps {
  _id: string;
  name: string;
  email: string;
  exp: number;
}
export interface UserProps {
  _id?: string;
  name: string;
  email: string;
  media: string[];
  age: number;
  gender: string;
  sex: string;
  country: string;
  hobby: string[];
  about: string;
  like_id: string[];
  match_id: string[];
  lookingFor: string;
  relationship: string;
  created_at?: Date;
  updated_at?: Date;
}

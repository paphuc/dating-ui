export interface ILogin {
  email: string
  password: string
}

export interface IRegisterUser {
  name: string
  email: string
  password: string
  retypePassword: string
}

export interface IConfig {
  WS: string
  Host: string
  Port: string
}
export interface JwtProps {
  _id: string
  name: string
  email: string
  exp: number
}
export interface IUser {
  _id: string
  name: string
  email: string
  media: string[]
  birthday: Date
  gender: string
  sex: string
  country: string
  hobby: string[]
  about: string
  like_id: string[]
  match_id: string[]
  looking_for: string
  relationship: string
  disable: boolean
  created_at?: Date
  updated_at?: Date
}

export interface IActionType<T> {
  type: string
  payload: T
}

export interface IStore<T> {
  isLoading: boolean
  currentPage?: number
  filter?: Object
  content?: Array<T>
  maxItemsPerPage?: number
  totalItems?: number
  totalPages?: number
  [x: string]: any
}
export interface UserUpdateProps {
  _id?: string
  name: string
  media: string[]
  birthday: Date | string
  gender: string
  sex: string
  country: string
  hobby: string[]
  about: string
  looking_for: string
  relationship: string
}

export interface ImessagesAPI {
  _id: string
  attachments: string[]
  content: string
  created_at: string
  room_id: string
  sender_id: string
}

export interface IUserInRoom {
  _id: string
  name: string
  avatar: string
  gender: string
}

export interface IRoom {
  _id: string
  users: [IUserInRoom]
  last_message?: {
    _id: string
    room_id: string
    sender_id: string
    content: string
    attachments: string
    created_at: string 
  }
}

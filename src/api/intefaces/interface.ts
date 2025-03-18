//register
export interface RegisterResponse {
  status: string;
}

export interface LoginResponse {
  token: string;
}
export interface MessageRequest {
  status: string;
}
//user
export interface User {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

//room

export interface IRoom {
  id: number;
  name: string;
}

export interface IRoomListResponse {
  data: IRoom[];
}

export interface RoomWithMessage {
  id: number;
  name: string;
  messages: Message[];
}

//message
export interface Message {
  id: number;
  roomId: number;
  userId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: { username: string };
}

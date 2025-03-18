import { api } from "./api";
import {
  IRoom,
  IRoomListResponse,
  RoomWithMessage,
} from "./intefaces/interface";

export const getRooms = async (): Promise<IRoom[]> => {
  const response = await api.get<IRoomListResponse>("/rooms");
  return response.data.data;
};

export const getRoomById = async (roomId: string): Promise<RoomWithMessage> => {
  const response = await api.get(`/rooms/${roomId}`);
  return response.data.data;
};

export const createRoom = async (name: string): Promise<IRoom> => {
  const response = await api.post("/rooms", { name });
  return response.data;
};

export const updateRoom = async (
  roomId: string,
  name: string,
): Promise<IRoom> => {
  const response = await api.put(`/rooms/${roomId}`, { name });
  return response.data;
};

export const deleteRoom = async (roomId: string): Promise<void> => {
  const response = await api.delete(`/rooms/${roomId}`);
};

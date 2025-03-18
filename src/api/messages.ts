import { api } from "./api";
import { MessageRequest } from "./intefaces/interface";

export const postMessage = async (
  roomId: string,
  content: string,
): Promise<MessageRequest> => {
  const response = await api.post(`/messages/${roomId}`, { content });
  return response.data;
};

export const updateMessage = async (
  roomId: string,
  content: string,
): Promise<MessageRequest> => {
  const response = await api.put(`/messages/${roomId}`, { content });
  return response.data;
};

export const deleteMessage = async (roomId: string): Promise<void> => {
  const response = await api.delete(`/messages/${roomId}`);
};

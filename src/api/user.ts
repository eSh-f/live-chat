import { api } from "./api";
import { User } from "./intefaces/interface";

export const getUser = async (userId: string): Promise<User> => {
  const response = await api.get(`/user/${userId}`);
  return response.data.data;
};

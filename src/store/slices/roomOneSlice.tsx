import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { AxiosResponse } from "axios";
import { RootState } from "../store";

interface IRoom {
  id: number;
  name: string;
  messages: IMessage[];
}

interface IRoomOneState {
  room: IRoom | null;
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
}

interface IRoomOneResponse {
  data: IRoom;
}

export interface IMessage {
  id: number;
  room_id: number;
  user_id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: IUser;
}

export interface IUser {
  username: string;
}

export const getOneRoom = createAsyncThunk<
  IRoom,
  number,
  { rejectValue: string; state: RootState }
>("room/getOneRoom", async (roomId: number, { rejectWithValue, getState }) => {
  try {
    const token: string | null = getState().auth.token;
    if (!token) throw new Error("Нет токена, пользователь не авторизован!");

    const response: AxiosResponse<IRoomOneResponse> =
      await api.get<IRoomOneResponse>(`/rooms/${roomId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    return response.data.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data || "Ошибка получения комнаты! ",
    );
  }
});

const initialState: IRoomOneState = {
  room: null,
  status: "idle",
  error: null,
};

const roomOneSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOneRoom.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOneRoom.fulfilled, (state, action: PayloadAction<IRoom>) => {
        state.room = action.payload;
        state.status = "success";
      })
      .addCase(getOneRoom.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload as string;
      });
  },
});

export default roomOneSlice.reducer;

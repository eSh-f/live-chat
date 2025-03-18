import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../slices/service/baseQueryWithAuth";
import { IUser } from "../slices/roomOneSlice";

//allRooms
interface IRoomsResponse {
  data: IRoom[];
}

interface IRoom {
  id: number;
  name: string;
}

//one room with messages
export interface IRoomDetails extends IRoom {
  messages: IMessage[];
}

interface IRoomOneResponse {
  data: IRoomDetails | null;
}

interface IMessage {
  id: number;
  room_id: number;
  user_id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: IUser;
}

//update room

interface IUpdateRoomPayload {
  roomId: number;
  name: string;
}

interface ISendMessagePayload {
  roomId: number;
  content: string;
}

export const roomApi = createApi({
  reducerPath: "roomApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Rooms"],
  endpoints: (builder) => ({
    getAllRooms: builder.query<IRoom[], void>({
      query: () => ({
        url: "/rooms",
        method: "GET",
      }),
      providesTags: ["Rooms"],
      transformResponse: (response: IRoomsResponse): IRoom[] => response.data,
    }),
    getOneRoom: builder.query<IRoomDetails, number>({
      query: (roomId: number) => ({
        url: `/rooms/${roomId}`,
        method: "GET",
      }),
      providesTags: ["Rooms"],
      transformResponse: (response: IRoomOneResponse): IRoomDetails =>
        response?.data ?? { id: 0, name: "", messages: [] },
    }),
    createRoom: builder.mutation<void, { name: string }>({
      query: ({ name }) => ({
        url: `/rooms`,
        method: "POST",
        body: { name },
      }),
      invalidatesTags: ["Rooms"],
    }),
    updateRoom: builder.mutation<void, IUpdateRoomPayload>({
      query: ({ roomId, name }) => ({
        url: `/rooms/${roomId}`,
        method: "PUT",
        body: { name },
      }),
      invalidatesTags: ["Rooms"],
    }),
    deleteRoom: builder.mutation<void, number>({
      query: (roomId: number) => ({
        url: `/rooms/${roomId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Rooms"],
    }),
    sendMessageSystem: builder.mutation<void, ISendMessagePayload>({
      query: ({ roomId, content }) => ({
        url: `/messages/${roomId}`,
        method: "POST",
        body: { content },
      }),
      invalidatesTags: ["Rooms"],
    }),
  }),
});

export const {
  useGetAllRoomsQuery,
  useGetOneRoomQuery,
  useCreateRoomMutation,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
  useSendMessageSystemMutation,
} = roomApi;

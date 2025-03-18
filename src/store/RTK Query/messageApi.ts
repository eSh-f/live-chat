import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../slices/service/baseQueryWithAuth";

interface ICreateMessageRequest {
  roomId: number;
  content: string;
}

interface IUpdateMessageRequest {
  messageId: number;
  content: string;
}

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    sendMessage: builder.mutation<void, ICreateMessageRequest>({
      query: ({ content, roomId }) => ({
        url: `/messages/${roomId}`,
        method: "POST",
        body: { content },
      }),
    }),
    updateMessage: builder.mutation<void, IUpdateMessageRequest>({
      query: ({ content, messageId }) => ({
        url: `/messages/${messageId}`,
        method: "PUT",
        body: content,
      }),
    }),
    deleteMessage: builder.mutation<void, number>({
      query: (messageId: number) => ({
        url: `/messages/${messageId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useSendMessageMutation,
  useUpdateMessageMutation,
  useDeleteMessageMutation,
} = messageApi;

import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../slices/service/baseQueryWithAuth";

interface IUserResponse {
  data: IUser;
}

interface IUser {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getUserProfile: builder.query<IUser, number>({
      query: (id: number) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      transformResponse: (response: IUserResponse) => response.data,
    }),
  }),
});

export const { useGetUserProfileQuery } = userApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IRegisterResponse {
  status: string;
}

interface IRegisterPayload {
  username: string;
  password: string;
  email: string;
}

export const registerApi = createApi({
  reducerPath: "registerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegisterResponse, IRegisterPayload>({
      query: (userData) => ({
        url: "register",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = registerApi;

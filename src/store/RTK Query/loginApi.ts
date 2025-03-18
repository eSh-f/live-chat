import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../slices/service/baseQueryWithAuth";
import { logout, setToken } from "../slices/authSlice";

interface ILoginPayload {
  username: string;
  password: string;
}

interface ILoginResponse {
  token: string;
}

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    loginUser: builder.mutation<ILoginResponse, ILoginPayload>({
      query: (userData) => ({
        url: "login",
        method: "POST",
        body: userData,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setToken(data.token));
          console.log("Авторизация успешна!");
        } catch (error) {
          console.error("Ошибка авторизации", error);
        }
      },
    }),
    logoutUser: builder.mutation<void, void>({
      queryFn: async (_, { dispatch }) => {
        dispatch(logout());
        return { data: undefined };
      },
    }),
  }),
});

export const { useLoginUserMutation, useLogoutUserMutation } = loginApi;

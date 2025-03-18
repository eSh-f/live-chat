import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";

const API_URL = "http://localhost:4000/api";

export const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

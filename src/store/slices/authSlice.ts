import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

interface AuthState {
  token: string | null;
  userId: number | null;
}

const token = localStorage.getItem("token");

const initialState: AuthState = {
  token,
  userId: token ? jwtDecode<{ userId: number }>(token).userId : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
      try {
        const decoded: { userId: number } = jwtDecode(action.payload);
        state.userId = decoded.userId;
      } catch (error) {
        console.error("Ошибка декодирования токена", error);
        state.userId = null;
      }
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.userId = null;
    },
  },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;

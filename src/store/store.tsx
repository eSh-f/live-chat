import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import roomSlice from "./slices/roomSlice";
import { registerApi } from "./RTK Query/registerApi";
import { loginApi } from "./RTK Query/loginApi";
import { messageApi } from "./RTK Query/messageApi";
import { userApi } from "./RTK Query/userApi";
import { roomApi } from "./RTK Query/roomApi";

const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
    [roomApi.reducerPath]: roomApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authSlice,
    room: roomSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      registerApi.middleware,
      loginApi.middleware,
      roomApi.middleware,
      messageApi.middleware,
      userApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

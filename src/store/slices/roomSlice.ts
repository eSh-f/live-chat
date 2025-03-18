import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RoomState {
  previousRoomId: number | null;
}

const initialState: RoomState = {
  previousRoomId: null,
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setPreviousRoomId: (state, action: PayloadAction<number | null>) => {
      state.previousRoomId = action.payload;
    },
  },
});

export const { setPreviousRoomId } = roomSlice.actions;
export default roomSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAutorizationState {
  token: string | null;
  email: string | null;
  username: string | null;
  image: string | null;
  bio: string | null;
}

const initialState: IAutorizationState = {
  token: null,
  email: null,
  username: null,
  image: null,
  bio: null,
};

const autorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setAutarization(state, action: PayloadAction<IAutorizationState>) {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.image = action.payload?.image ? action.payload.image : null;
      state.bio = action.payload?.bio ? action.payload.bio : null;
    },
    removeAutarization(state) {
      state.token = null;
      state.email = null;
      state.username = null;
      state.image = null;
      state.bio = null;
    },
  },
});

export const { setAutarization, removeAutarization } =
  autorizationSlice.actions;
export default autorizationSlice.reducer;

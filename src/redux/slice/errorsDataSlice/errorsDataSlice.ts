import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "errorsData",
  initialState: null,
  reducers: {
    setError(_, action) {
      return action.payload;
    },
  },
});

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      console.log("check state", initialState, "check payload", action.payload);

      state.push({ ...action.payload, count: 1 });
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    update(state, action) {
      if (action.payload.type === "add") {
        state[action.payload.index].count++;
      } else if (action.payload.type === "subtract") {
        state[action.payload.index].count--;
      }
    },
  },
});

export const { add, remove, update } = cartSlice.actions;
export default cartSlice.reducer;

import {
   createSlice
} from "@reduxjs/toolkit";
import { getDesserts, removeDesserts } from "./dessertThunk";

const initialState = {
   statusOfDessert: "idle",
   desserts: []
}

export const dessertsSlice = createSlice({
   name: 'desserts',
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
          .addCase(getDesserts.pending, (state, action) => {
              state.status = "getting your desserts"
          })
          .addCase(getDesserts.fulfilled, (state, action) => {
              state.status = "already got your desserts"
              state.desserts = action.payload
          })
          .addCase(getDesserts.rejected, (state, action) => {
              state.status = "budesh golodaty"
          });
      builder
          .addCase(removeDesserts.pending, (state, action) => {
              state.status = "removing your desserts"
          })
          .addCase(removeDesserts.fulfilled, (state, action) => {
              state.status = "removed your desserts"
              state.desserts = state.desserts.filter((item) => item._id !== action.payload);
          })
          .addCase(removeDesserts.rejected, (state, action) => {
              state.status = "error"
          })
  }
})

export default dessertsSlice.reducer
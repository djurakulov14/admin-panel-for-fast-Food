import {
   createSlice
} from "@reduxjs/toolkit";
import { getDesserts } from "./dessertThunk";

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
              state.burgers = action.payload
          })
          .addCase(getDesserts.rejected, (state, action) => {
              state.status = "budesh golodaty"
          });
  }
})

export default dessertsSlice.reducer
import {
   createSlice
} from "@reduxjs/toolkit";
import { editDesserts, getDesserts, removeDesserts } from "./dessertThunk";

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
              state.status = "deleting your desserts"
          })
          .addCase(removeDesserts.fulfilled, (state, action) => {
              state.status = "already deleted your desserts"
              state.desserts =  state.desserts.filter((item) => item.id !== action.payload)
          })
          .addCase(removeDesserts.rejected, (state, action) => {
              state.status = "dessert didn't delete"
          });
      builder
            .addCase(editDesserts.pending, (state, action) => {
                state.status = "editing your desserts"
            })
            .addCase(editDesserts.fulfilled, (state, action) => {
                state.status = "edited your desserts"
            })
            .addCase(editDesserts.rejected, (state, action) => {
                state.status = "error"
            })
  }
})

export default dessertsSlice.reducer
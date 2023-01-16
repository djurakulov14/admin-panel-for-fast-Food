import { createSlice } from "@reduxjs/toolkit";
import { editLiquids, getLiquids, removeLiquids } from "./liquidThunk";

const initialState ={
    liquids: [],
    statusOfLiquid: "idle"
}

export const liquidsSlice = createSlice({
    name: "liquids",
    initialState,
    reducers:{},
    extraReducers(builder) {
       builder
           .addCase(getLiquids.pending, (state, action) => {
               state.status = "getting your liquids"
           })
           .addCase(getLiquids.fulfilled, (state, action) => {
               state.status = "already got your liquids"
               state.liquids = action.payload
           })
           .addCase(getLiquids.rejected, (state, action) => {
               state.status = "budesh golodaty"
           });
       builder
           .addCase(removeLiquids.pending, (state, action) => {
               state.status = "getting your liquids"
           })
           .addCase(removeLiquids.fulfilled, (state, action) => {
               state.status = "already got your liquids"
               state.liquids = state.liquids.filter((item) => item.id !== action.payload)
           })
           .addCase(removeLiquids.rejected, (state, action) => {
               state.status = "budesh golodaty"
           });
        builder
            .addCase(editLiquids.pending, (state, action) => {
                state.status = "editing your liquids"
            })
            .addCase(editLiquids.fulfilled, (state, action) => {
                state.status = "edited your liquids"
            })
            .addCase(editLiquids.rejected, (state, action) => {
                state.status = "error"
            })
   }
})

export default liquidsSlice.reducer
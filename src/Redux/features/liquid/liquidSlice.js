import { createSlice } from "@reduxjs/toolkit";
import { getLiquids } from "./liquidThunk";

const initialState ={
    liquids:[],
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
               state.burgers = action.payload
           })
           .addCase(getLiquids.rejected, (state, action) => {
               state.status = "budesh golodaty"
           });
   }
})

export default liquidsSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { getLiquid, editeLiquid, postLiquid, removeLiquid } from "./liquidThunk";

const initialState = {
    statusOfLiquid:"idle",
    liquids:[]
}

export const liquidSlice = createSlice({
    name: "liquid",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(getLiquid.pending, (state, action)=>{
                state.status = "getting your liquids"
            })
            .addCase(getLiquid.fulfilled, (state, action)=>{
                state.status = "already got your liquids"
                state.burgers = action.payload
            })
            .addCase(getLiquid.rejected, (state, action)=>{
                state.status = "budesh golodat"
            })
        builder
            .addCase(editeLiquid.pending, (state, action)=>{
                state.status = "editing your liquids"
            })
            .addCase(editeLiquid.fulfilled, (state, action)=>{
                state.status = "edited your liquids"
            })
            .addCase(editeLiquid.rejected, (state, action)=>{
                state.status = "error"
            })
        builder
            .addCase(postLiquid.pending, (state, action)=>{
                state.status = "posting your liquids"
            })
            .addCase(postLiquid.fulfilled, (state, action)=>{
                state.status = "posted your liquids"
            })
            .addCase(postLiquid.rejected, (state, action)=>{
                state.status = "error"
            })
        builder
            .addCase(removeLiquid.pending, (state, action)=>{
                state.status = "removing your liquids"
            })
            .addCase(removeLiquid.fulfilled, (state, action)=>{
                state.status = "removed your liquids"
            })
            .addCase(removeLiquid.rejected, (state, action)=>{
                state.status = "error"
            })
    }
})

export default liquidSlice.reducer
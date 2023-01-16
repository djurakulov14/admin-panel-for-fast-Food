import {
    createSlice
} from "@reduxjs/toolkit";
import { editSalad, getSalad, removeSalad } from "./saladsThunk";


const initialState = {
    statusOfSalad: "idle",
    salads: []
}


export const saladsSlice = createSlice({
    name: 'salads',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getSalad.pending, (state, action) => {
                state.status = "getting your salads"
            })
            .addCase(getSalad.fulfilled, (state, action) => {
                state.status = "got your salads"
                state.salads = action.payload
            })
            .addCase(getSalad.rejected, (state, action) => {
                state.status = "lost your salads"
            })
        builder
            .addCase(removeSalad.pending, (state, action) => {
                state.status = "getting your salads"
            })
            .addCase(removeSalad.fulfilled, (state, action) => {
                state.status = "got your salads"
                state.salads = state.salads.filter((item) => item.id !== action.payload)
            })
            .addCase(removeSalad.rejected, (state, action) => {
                state.status = "lost your salads"
            })
        builder
            .addCase(editSalad.pending, (state, action) => {
                state.status = "editing your salads"
            })
            .addCase(editSalad.fulfilled, (state, action) => {
                state.status = "edited your salads"
            })
            .addCase(editSalad.rejected, (state, action) => {
                state.status = "error"
            })
    }
})

export default saladsSlice.reducer
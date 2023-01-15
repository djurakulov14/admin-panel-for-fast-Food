import {
    createSlice
} from "@reduxjs/toolkit";
import { getSalad } from "./saladsThunk";


const initialState = {
    statusOfSalads: "idle",
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
            })
            .addCase(getSalad.rejected, (state, action) => {
                state.status = "lost your salads"
            })
    }
})

export default saladsSlice.reducer
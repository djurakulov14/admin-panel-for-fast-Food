import {
    createSlice
} from "@reduxjs/toolkit";
import { getBurger } from "./burgersThunk";

const initialState = {
    status: "idle",
    burgers: []
}

export const burgersSlice = createSlice({
    name: 'burgers',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getBurger.pending, (state, action) => {
                state.status = "getting your burgers"
            })
            .addCase(getBurger.fulfilled, (state, action) => {
                state.status = "already got your burgers"
                state.burgers = action.payload
            })
            .addCase(getBurger.rejected, (state, action) => {
                state.status = "budesh golodaty"
            });
    }
})

export default burgersSlice.reducer
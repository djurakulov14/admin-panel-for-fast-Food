import {
    createSlice
} from "@reduxjs/toolkit";
import { getBurger, removeBurger } from "./burgersThunk";

const initialState = {
    statusOfBurger: "idle",
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
        builder
            .addCase(removeBurger.pending, (state, action) => {
                state.status = "removing your burgers"
            })
            .addCase(removeBurger.fulfilled, (state, action) => {
                state.status = "removed your burger"
                state.burgers = state.burgers.filter((item) => item._id !== action.payload);
            })
            .addCase(removeBurger.rejected, (state, action) => {
                state.status = "error"
            })
    }
})

export default burgersSlice.reducer
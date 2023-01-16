import {
    createSlice
} from '@reduxjs/toolkit'
import { editSouses, getSouses, removeSouses } from './sousesThunk';

const initialState = {
    souses: [], 
    statusOfSouse: "idle"
}

export const sousesSlice = createSlice({
    name: 'souses',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getSouses.pending, (state, action) => {
                state.status = "getting your souses"
            })
            .addCase(getSouses.fulfilled, (state, action) => {
                state.status = "already got your souses"
                state.souses = action.payload
            })
            .addCase(getSouses.rejected, (state, action) => {
                state.status = "budesh golodaty"
            });
        builder
            .addCase(removeSouses.pending, (state, action) => {
                state.status = "getting your souses"
            })
            .addCase(removeSouses.fulfilled, (state, action) => {
                state.status = "already got your souses"
                state.souses = state.souses.filter((item) => item.id !== action.payload)
            })
            .addCase(removeSouses.rejected, (state, action) => {
                state.status = "budesh golodaty"
            });
        builder
            .addCase(editSouses.pending, (state, action) => {
                state.status = "editing your souses"
            })
            .addCase(editSouses.fulfilled, (state, action) => {
                state.status = "edited your souses"
            })
            .addCase(editSouses.rejected, (state, action) => {
                state.status = "error"
            })   
        }
})

export default sousesSlice.reducer
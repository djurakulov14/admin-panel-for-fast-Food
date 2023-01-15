import {
    createSlice
} from '@reduxjs/toolkit'
import { getSouses } from './sousesThunk';

const initialState = {
    souses: [], 
    statusOfSouse: 'idle'
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
        }
})

export default sousesSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search:""
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
})

export default searchSlice.reducer
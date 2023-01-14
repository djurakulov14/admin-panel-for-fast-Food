import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    salads: []
}


export const saladsSlice = createSlice({
    name: 'salads',
    initialState,
    reducers: {}
})

export default saladsSlice.reducer
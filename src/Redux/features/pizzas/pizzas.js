import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    pizzas: []
}


export const pizzassSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {}
})

export default pizzassSlice.reducer
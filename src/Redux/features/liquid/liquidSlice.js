import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    liquids:[]
}

export const liquidsSlice = createSlice({
    name: "liquids",
    initialState,
    reducers:{}
})

export default liquidsSlice.reducer
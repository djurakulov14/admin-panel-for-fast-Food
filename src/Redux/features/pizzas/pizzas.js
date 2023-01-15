import {
    createSlice
} from "@reduxjs/toolkit";
import { getPizzas } from "./pizzaThunk";

const initialState = {
    pizzas: [],
    statusofPizza:"idle"
}


export const pizzassSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {},
    extraReducers(builder) {
       builder
           .addCase(getPizzas.pending, (state, action) => {
               state.status = "getting your pizzas"
           })
           .addCase(getPizzas.fulfilled, (state, action) => {
               state.status = "already got your pizzas"
               state.burgers = action.payload
           })
           .addCase(getPizzas.rejected, (state, action) => {
               state.status = "budesh golodaty"
           });
   }
})

export default pizzassSlice.reducer
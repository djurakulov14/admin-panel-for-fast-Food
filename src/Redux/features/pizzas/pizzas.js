import {
    createSlice
} from "@reduxjs/toolkit";
import { getPizzas, removePizzas } from "./pizzaThunk";

const initialState = {
    pizzas: [],
    statusOfPizza:"idle"
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
               state.pizzas = action.payload
           })
           .addCase(getPizzas.rejected, (state, action) => {
               state.status = "budesh golodaty"
           });
       builder
           .addCase(removePizzas.pending, (state, action) => {
               state.status = "getting your pizzas"
           })
           .addCase(removePizzas.fulfilled, (state, action) => {
               state.status = "already got your pizzas"
               state.pizzas = state.pizzas.filter((item) => item.id !== action.payload)
           })
           .addCase(removePizzas.rejected, (state, action) => {
               state.status = "budesh golodaty"
           });
   }
})

export default pizzassSlice.reducer
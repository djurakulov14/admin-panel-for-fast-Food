import {
    createSlice
} from "@reduxjs/toolkit";
import { editPizzas, getPizzas, removePizzas } from "./pizzaThunk";

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
        builder
            .addCase(editPizzas.pending, (state, action) => {
                state.status = "editing your liquids"
            })
            .addCase(editPizzas.fulfilled, (state, action) => {
                state.status = "edited your liquids"
            })
            .addCase(editPizzas.rejected, (state, action) => {
                state.status = "error"
            })
   }
})

export default pizzassSlice.reducer
import {
    createSlice
} from "@reduxjs/toolkit";
import { MdPhonelinkSetup } from "react-icons/md";
import { editPizzas, getPizzas, postPizzas, removePizzas } from "./pizzaThunk";

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
               console.log(action.payload);
               state.pizzas = []
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
                state.status = "editing your pizzas"
            })
            .addCase(editPizzas.fulfilled, (state, action) => {
                state.status = "edited your pizzas"
            })
            .addCase(editPizzas.rejected, (state, action) => {
                state.status = "error"
            })
        builder
            .addCase(postPizzas.pending, (state, action) => {
                state.status = "editing your pizzas"
            })
            .addCase(postPizzas.fulfilled, (state, action) => {
                state.status = "edited your pizzas"
            })
            .addCase(postPizzas.rejected, (state, action) => {
                state.status = "error"
            }) 
   }
})

export default pizzassSlice.reducer
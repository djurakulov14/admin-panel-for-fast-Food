import { createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = "http://localhost:7777/"

export const getPizzas = createAsyncThunk(
    'pizzas/getPizzas',

    async () => {
        const res = await fetch(baseUrl + 'pizzas')
        const data = res.json()

        return data
    }
)
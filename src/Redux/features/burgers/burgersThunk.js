import { createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = "http://localhost:7777/"

export const getBurger = createAsyncThunk(
    'burgers/getBurger',

    async () => {
        const res = await fetch(baseUrl + 'burgers')
        const data = res.json()

        return data
    }
)
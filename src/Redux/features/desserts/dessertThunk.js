import { createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = "http://localhost:7777/"

export const getDesserts = createAsyncThunk(
    'desserts/getDesserts',

    async () => {
        const res = await fetch(baseUrl + 'desserts')
        const data = res.json()

        return data
    }
)
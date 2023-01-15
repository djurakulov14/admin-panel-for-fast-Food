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
export const removeDesserts = createAsyncThunk(
    'desserts/removeDesserts',

    async (id) => {
        const res = await fetch(baseUrl + 'desserts/' + id, {
            method: "DELETE"
        })
        const data = res.json()

        return data
    }
)
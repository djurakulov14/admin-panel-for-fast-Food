import { createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = "http://localhost:7777/"

export const getSalad = createAsyncThunk(
    'salads/getSalads',

    async () => {
        const res = await fetch(baseUrl + 'salads')
        const data = res.json()

        return data
    }
)
export const removeSalad = createAsyncThunk(
    'salads/removeSalads',

    async (id) => {
        const res = await fetch(baseUrl + 'salads/' + id, {
            method: "DELETE"
        })
        const data = res.json()

        return data
    }
)

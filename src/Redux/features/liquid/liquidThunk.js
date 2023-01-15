import { createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = "http://localhost:7777/"

export const getLiquids = createAsyncThunk(
    'liquids/getLiquids',

    async () => {
        const res = await fetch(baseUrl + 'liquids')
        const data = res.json()

        return data
    }
)
export const removeLiquids = createAsyncThunk(
    'liquids/removeLiquids',

    async (id) => {
        const res = await fetch(baseUrl + 'liquids/' + id, {
            method: "DELETE"
        })
        const data = res.json()

        return data
    }
)
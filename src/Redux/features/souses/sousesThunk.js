import { createAsyncThunk } from "@reduxjs/toolkit";
const sousesUrl = 'http://localhost:7777/'

export const getSouses = createAsyncThunk(
    'souses/getSouses',

    async () => {
        const response = await fetch(sousesUrl + 'souses')
        const data = response.json()

        return data
    }
)
export const removeSouses = createAsyncThunk(
    'souses/removeSouses',

    async (id) => {
        const response = await fetch(sousesUrl + 'souses/' + id, {
            method: "DELETE"
        })
        const data = response.json()

        return data
    }
)

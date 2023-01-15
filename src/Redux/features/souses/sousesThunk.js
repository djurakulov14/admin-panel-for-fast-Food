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

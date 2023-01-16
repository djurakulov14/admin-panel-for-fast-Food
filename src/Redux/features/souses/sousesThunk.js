import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
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
export const editSouses = createAsyncThunk(
    'souses/editSouses',

    async (item) => {

        const res = axios.patch(sousesUrl + "souses/" + item.id, item)

        return res

    }
)
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const baseUrl = 'http://localhost:7777/'

export const getSouses = createAsyncThunk(
    'souses/getSouses',

    async () => {
        const response = await fetch(baseUrl + 'souses')
        const data = response.json()

        return data
    }
)
export const removeSouses = createAsyncThunk(
    'souses/removeSouses',

    async (id) => {
        const response = await fetch(baseUrl + 'souses/' + id, {
            method: "DELETE"
        })
        const data = response.json()

        return data
    }
)
export const editSouses = createAsyncThunk(
    'souses/editSouses',

    async (item) => {

        const res = axios.patch(baseUrl + "souses/" + item.id, item)

        return res

    }
)
export const postSouses = createAsyncThunk(
    'souses/postSouses',

    async (item) => {

        const res = axios.post(baseUrl + "souses", item)

        return res

    }
)
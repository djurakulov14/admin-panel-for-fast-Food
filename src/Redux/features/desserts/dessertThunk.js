import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
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
export const editDesserts = createAsyncThunk(
    'desserts/editDesserts',

    async (item) => {

        const res = axios.patch(baseUrl + "desserts/" + item.id, item)

        return res

    }
)
export const postDesserts = createAsyncThunk(
    'desserts/postDesserts',

    async (item) => {

        const res = axios.post(baseUrl + "desserts", item)

        return res

    }
)
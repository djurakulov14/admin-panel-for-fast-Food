import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const baseUrl = "http://localhost:7777/"

export const getBurger = createAsyncThunk(
    'burgers/getBurger',

    async () => {
        const res = await fetch(baseUrl + 'burgers')
        const data = res.json()

        return data
    }
)
export const removeBurger = createAsyncThunk(
    'burgers/removeBurger',

    async (id) => {
        const res = await fetch(baseUrl + 'burgers/' + id, {
            method: "DELETE"
        })
        const data = res.json()

        return data
    }
)
export const editBurger = createAsyncThunk(
    'burgers/editBurger',

    async (item) => {

        const res = axios.patch(baseUrl + "burgers/" + item.id, item)

        return res

    }
)
    // const res = await fetch(baseUrl + 'burgers/' + item.id, {
    //     method: "PATCH",
    //     body: JSON.stringify(item)
    // })
    // const data = res.json()

    // return data

export const postBurger = createAsyncThunk(
    'burgers/postBurger',

    async (item) => {

        const res = axios.post(baseUrl + "burgers", item)

        return res

    }
)
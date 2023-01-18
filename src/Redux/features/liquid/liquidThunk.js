import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const baseUrl = "http://localhost:7777/"

export const getLiquids = createAsyncThunk(
    'liquids/getLiquids',

    async () => {
        const res = await axios.get(baseUrl + 'liquids')

        return res
    }
)
export const removeLiquids = createAsyncThunk(
    'liquids/removeLiquids',

    async (id) => {
        const res = await axios.delete(baseUrl + 'liquids/' + id)

        return res
    }
)
export const editLiquids = createAsyncThunk(
    'liquids/editLiquids',

    async (item) => {

        const res = axios.patch(baseUrl + "liquids/" + item.id, item)

        return res

    }
)
export const postLiquids = createAsyncThunk(
    'liquids/postLiquids',

    async (item) => {

        const res = axios.post(baseUrl + "liquids", item)

        return res

    }
)
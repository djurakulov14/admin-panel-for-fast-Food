import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const baseUrl = "http://localhost:7777/"

export const getLiquid = createAsyncThunk(
    "liquid/getLiquid",

    async () =>{
        const res = await axios.get(baseUrl + "liquids")

        return res
    }
)

export const removeLiquid = createAsyncThunk(
    "liquid/removeLiquid",

    async (id) =>{
        const res = await axios.delete(baseUrl +"liquids/" + id)

        return res
    }
)
export const editeLiquid = createAsyncThunk(
    "liquid/editLiquid",

    async (item) =>{
        const res = await axios.patch(baseUrl + "liquids/" + item.id, item)

        return res
    }
)

export const postLiquid = createAsyncThunk(
    "liquid/postLiquid",

    async(item)=>{
        const res = await axios.post(baseUrl + "liquids", item)

        return res
    }
)
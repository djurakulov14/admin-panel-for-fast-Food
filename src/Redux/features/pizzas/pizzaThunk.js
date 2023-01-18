import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const baseUrl = "http://localhost:7777/"

export const getPizzas = createAsyncThunk(
    'pizzas/getPizzas',

    async () => {
        const res = await fetch(baseUrl + 'pizzas')
        const data = res.json()

        return data
    }
)
export const removePizzas = createAsyncThunk(
    'pizzas/removePizzas',

    async (id) => {
        const res = await fetch(baseUrl + 'pizzas/' + id, {
            method: "DELETE"
        })
        const data = res.json()

        return data
    }
)
export const editPizzas = createAsyncThunk(
    'pizzas/editPizzas',

    async (item) => {

        const res = axios.patch(baseUrl + "pizzas/" + item.id, item)

        return res

    }
)
export const postPizzas = createAsyncThunk(
    'pizzas/postPizzas',

    async (item) => {

        const res = axios.post(baseUrl + "pizzas", item)

        return res

    }
)



// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios'
// const baseUrl = "http://localhost:7777/"

// export const getPizzas = createAsyncThunk(
//     'pizzas/getPizzas',

//     async () => {
//         const res = await fetch(baseUrl + 'pizzas')
//         const data = res.json()

//         return {data, res}
//     }
// )
// export const removePizzas = createAsyncThunk(
//     'pizzas/removePizzas',

//     async (id) => {
//         const res = await fetch(baseUrl + 'pizzas/' + id, {
//             method: "DELETE"
//         })
        
//         const data = res.json()

//         return {data, res}
//     }
// )
// export const editPizzas = createAsyncThunk(
//     'pizzas/editPizzas',

//     async (item) => {

//         const res = axios.patch(baseUrl + "pizzas/" + item.id, item)

//         const data = await res.data

//         return {data, res}

//     }
// )
// export const postPizzas = createAsyncThunk(
//     'pizzas/postPizzas',

//     async (item) => {

//         const res = axios.post(baseUrl + "pizzas", item)

//         const data = await res.data

//         return {data, res}

//     }
// )
import {
    createSlice
} from '@reduxjs/toolkit'

const initialState = {
    souses: [

    ]
}

export const sousesSlice = createSlice({
    name: 'souses',
    initialState,
    reducers: {}
})

export default sousesSlice.reducer
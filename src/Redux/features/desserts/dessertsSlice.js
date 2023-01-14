import {
   createSlice
} from "@reduxjs/toolkit";

const initialState = {
   desserts: [

   ]
}

export const dessertsSlice = createSlice({
   name: 'desserts',
   initialState,
   reducers: {}
})

export default dessertsSlice.reducer
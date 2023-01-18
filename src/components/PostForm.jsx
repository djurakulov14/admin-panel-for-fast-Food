import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';
import React from 'react'
import { useDispatch } from 'react-redux';
import { postBurger } from '../Redux/features/burgers/burgersThunk';
import { postDesserts } from '../Redux/features/desserts/dessertThunk';
import { postLiquids } from '../Redux/features/liquid/liquidThunk';
import { postPizzas } from '../Redux/features/pizzas/pizzaThunk';
import { postSalads } from '../Redux/features/salads/saladsThunk';
import { postSouses } from '../Redux/features/souses/sousesThunk';

export const PostForm = ({setVisible}) => {
  const dispatch = useDispatch()

  function submit(e,form) {
    e.preventDefault()

    let arr = {
        id: uuidv4(),
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        arr[key] = value
    })

    switch(arr.type){
      case "burgers":
        dispatch(postBurger(arr))
        break
      case "salads":
        dispatch(postSalads(arr))
        break
      case "pizzas":
        dispatch(postPizzas(arr))
        break
      case "souses":
        dispatch(postSouses(arr))
        break
      case "liquids":
        dispatch(postLiquids(arr))
        break
      case "desserts":
        dispatch(postDesserts(arr))  
        break
      default:
        break
    }
    setVisible(false)
  }

  return (
    <form className='flex flex-col gap-3' onSubmit={event => submit(event,event.target)}>
        <h1 >Добавить продукт</h1>
        <TextField name='title' id="outlined-basic" label="title" variant="outlined" />
        <TextField name='body' id="outlined-basic" label="body" variant="outlined" />
        <TextField name='price' id="outlined-basic" label="price" variant="outlined" />
        <TextField name='img' id="outlined-basic" label="img" variant="outlined" />
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"burgers"}
                label="Type"
                name='type'
                // onChange={handleChange}
            >
                <MenuItem value={"burgers"}>burger</MenuItem>
                <MenuItem value={"salads"}>salad</MenuItem>
                <MenuItem value={"pizzas"}>pizza</MenuItem>
                <MenuItem value={"souses"}>souses</MenuItem>
                <MenuItem value={"liquids"}>liquid</MenuItem>
                <MenuItem value={"desserts"}>dessert</MenuItem>
            </Select>
        </FormControl>
        <Button type='submit' variant="contained">ADD</Button>
    </form>
  )
}

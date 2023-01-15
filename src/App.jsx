import React, { useEffect } from "react";
import "./App.scss";
import { getBurger } from "./Redux/features/burgers/burgersThunk";
import { useDispatch, useSelector } from "react-redux";
import { getSalad } from "./Redux/features/salads/saladsThunk";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { getDesserts } from "./Redux/features/desserts/dessertThunk";
import { getSouses } from "./Redux/features/souses/sousesThunk";
import { getPizzas } from "./Redux/features/pizzas/pizzaThunk";


function App() {

    const {burgers, statusOfBurger} = useSelector(state => state.burgers)
	const {salads, statusOfSalad} = useSelector(state => state.salads)
	const {desserts, statusOfDessert} = useSelector(state => state.desserts)
	const {souses, statusOfSouse} = useSelector(state => state.souses)
	const {pizzas, statusOfPizza} = useSelector(state => state.pizzas)
    const dispatch = useDispatch();

	useEffect(() => {
        if(burgers.length === 0) {
			dispatch(getBurger())
			dispatch(getSalad())
			dispatch(getDesserts())
			dispatch(getSouses())
			dispatch(getPizzas())
        }
		console.log(burgers);
		console.log(salads);
		console.log(desserts);
		console.log(souses);
		console.log(pizzas);
    }, []);
	return (
		<Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
	)
}

export default App;
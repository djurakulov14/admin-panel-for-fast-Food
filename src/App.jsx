import React, { useEffect } from "react";
import "./App.scss";
import { getBurger } from "./Redux/features/burgers/burgersThunk";
import { useDispatch, useSelector } from "react-redux";
import { getSalad } from "./Redux/features/salads/saladsThunk";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";


function App() {

    const {burgers, status} = useSelector(state => state.burgers)
	const {salads} = useSelector(state => state.salads)
    const dispatch = useDispatch();

	useEffect(() => {
        if(burgers.length === 0) {
			dispatch(getBurger())
        }
		if(salads.length === 0) {
			dispatch(getSalad())
        }
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
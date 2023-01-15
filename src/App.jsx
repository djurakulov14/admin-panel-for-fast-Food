import React, { useEffect } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import burgers from "./Redux/features/burgers/burgersSlice";
import { getBurger } from "./Redux/features/burgers/burgersThunk";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";


function App() {

    const {burgers, status} = useSelector(state => state.burgers)
    const dispatch = useDispatch();

	useEffect(() => {

        if(burgers.length === 0) {
            dispatch(getBurger())
        }
	console.log(burgers, status);
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
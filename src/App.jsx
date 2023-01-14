import React, { useEffect } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import burgers from "./Redux/features/burgers/burgersSlice";
import { getBurger } from "./Redux/features/burgers/burgersThunk";
import { useDispatch, useSelector } from "react-redux";


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
		<h1>hello</h1>
	)
}

export default App;
import React, { useEffect } from "react";
import "./App.scss";
import { getBurger } from "./Redux/features/burgers/burgersThunk";
import { useDispatch, useSelector } from "react-redux";
import { getSalad } from "./Redux/features/salads/saladsThunk";


function App() {

    const {burgers, status} = useSelector(state => state.burgers)
	const {salads} = useSelector(state => state.salads)
    const dispatch = useDispatch();

	useEffect(() => {
        if(burgers.length === 0) {
			dispatch(getBurger())
			console.log(burgers, status);
        }
		if(salads.length === 0) {
			dispatch(getSalad())
        }
		console.log(salads);
    }, []);
	return (
		<h1>hello</h1>
	)
}

export default App;
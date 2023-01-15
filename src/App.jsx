import React from "react";
import "./App.scss";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Souses from './Pages/Souses'
import Burgers from "./Pages/Burgers";
import Desserts from "./Pages/Desserts";
import Pizzas from "./Pages/Pizzas";
import Salads from "./Pages/Salads";
import Liquids from "./Pages/Liquids";

function App() {

	return (
		<Routes>
            <Route path="/" element={<Layout/>}>
                <Route  path="/souses" element={<Souses />}/>
                <Route  path="/burgers" element={<Burgers />}/>
                <Route  path="/desserts" element={<Desserts />}/>
                <Route  path="/pizzas" element={<Pizzas />}/>
                <Route  path="/salads" element={<Salads />}/>
                <Route  path="/liquids" element={<Liquids />}/>
            </Route>
        </Routes>
	)
}

export default App;
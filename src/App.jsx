import React, { useState } from "react";
import "./App.scss";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Souses from "./Pages/Souses";
import Burgers from "./Pages/Burgers";
import Desserts from "./Pages/Desserts";
import Pizzas from "./Pages/Pizzas";
import Salads from "./Pages/Salads";
import Liquids from "./Pages/Liquids";
// import SearchContext from "./Context/searchContext";

function App() {
  const [text , setText] = useState("")
  return (
      <Routes>
        <Route path="/" element={<Layout setText={setText}/>}>
          <Route index element={<Burgers text={text}/>} />
          <Route path="/souses" element={<Souses text={text}/>} />
          <Route path="/desserts" element={<Desserts text={text}/>} />
          <Route path="/pizzas" element={<Pizzas text={text}/>} />
          <Route path="/salads" element={<Salads text={text}/>} />
          <Route path="/liquids" element={<Liquids text={text}/>} />
        </Route>
      </Routes>
  );
}

export default App;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getDesserts,
	removeDesserts,
} from "../Redux/features/desserts/dessertThunk";
import Cards from "../components/Cards";
import ProductsView from "../hoc/ProductsView";
const Desserts = ({text}) => {
	return (
		<div>
			<ProductsView dataName={"desserts"} text={text} fetchThunk={getDesserts} removeItemThunk={removeDesserts}  />
		</div>
	);
};

export default Desserts;

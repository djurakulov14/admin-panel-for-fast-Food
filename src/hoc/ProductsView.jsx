import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import Cards from '../components/Cards';

const ProductsView = ({dataName, fetchThunk, removeItemThunk}) => {
    const dispatch = useDispatch();
	const [update, setUpdate] = useState(false)
	const state = useSelector((state) => state[dataName]); // state.burgers
    const data = state[dataName]
	
	const removeItem = (id) => {
        console.log(id);
		dispatch(removeItemThunk(id)).then(res => {

            if(res.status) {
                toast('Item removed')
            } else {
                toast('Something went wrong')
            }

		})
	}

	useEffect(() => {
		dispatch(fetchThunk());
	}, [update]);

    return (
        <>
            <section className="grid grid-cols-3 gap-5">
				{data.map((i) => (
					<Cards item={i} key={i.id} removeItem={removeItem} />
				))}
				<ToastContainer />
			</section>   
        </>
    );
};


export default ProductsView;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards';
import { getPizzas } from "../Redux/features/pizzas/pizzaThunk";
const Pizzas = () => {

  const dispatch = useDispatch();
  const {pizzas, status} = useSelector(state => state.pizzas)
  useEffect(() => {

    dispatch(getPizzas())
    console.log(pizzas);

  }, []);
    return (
        <div>
            <section className='grid grid-cols-3 gap-5'> 
              {
               pizzas.map(i => <Cards item={i} key={i.id} />)
              }
           </section>
        </div>
    );
}

export default Pizzas;

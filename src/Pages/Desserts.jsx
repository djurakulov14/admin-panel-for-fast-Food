import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDesserts, removeDesserts } from '../Redux/features/desserts/dessertThunk';
import Cards from '../components/Cards';
const Desserts = () => {
    
    
  const dispatch = useDispatch();
  const {desserts, status} = useSelector(state => state.desserts)
  useEffect(() => {
    
    dispatch(getDesserts())
    console.log(desserts);

  }, []);
    return (
        <div>
            <section className='grid grid-cols-3 gap-5'> 
              {
               desserts.map(i => <Cards item={i} key={i.id} remove={removeDesserts}  />)
              }
           </section>
        </div>
    );
}

export default Desserts;

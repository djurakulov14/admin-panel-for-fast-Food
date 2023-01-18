import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards';
import { getLiquids, removeLiquids } from '../Redux/features/liquid/liquidThunk';

const Liquids = () => {
    const dispatch = useDispatch();
    const {liquids, status} = useSelector(state => state.liquid)
    useEffect(() => {
      
      dispatch(getLiquids())
  
    }, []);

    console.log(liquids);
    return (
        <div>
            <section className='grid grid-cols-3 gap-5'> 
              {
               liquids.map(i => <Cards item={i} key={i.id} remove={removeLiquids}  />)
              }
           </section>
        </div>
    );
}

export default Liquids;

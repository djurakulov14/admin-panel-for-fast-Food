import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards';
import { getSalad } from '../Redux/features/salads/saladsThunk';

const Salads = () => {
    const dispatch = useDispatch();
  const {salads, status} = useSelector(state => state.salads)
  useEffect(() => {
			dispatch(getSalad())
    console.log(salads);

  }, []);
    return (
        <div>
            <section className='grid grid-cols-3 gap-5'> 
       {
        salads.map(i => <Cards item={i} key={i.id} />)
       }
       </section>
        </div>
    );
}

export default Salads;

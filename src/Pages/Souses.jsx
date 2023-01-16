import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../components/Cards';
import { getSalad } from '../Redux/features/salads/saladsThunk';
import { getSouses } from '../Redux/features/souses/sousesThunk';
import { removeSouses } from '../Redux/features/souses/sousesThunk';

function Home() {

  const dispatch = useDispatch();
  const {souses, status} = useSelector(state => state.souses)
  useEffect(() => {
			dispatch(getSouses())
    console.log(souses);

  }, []);


  return (
    <div>
       <section className='grid grid-cols-3 gap-5'> 
       {
        souses.map(i => <Cards item={i} key={i.id} remove={removeSouses} />)
       }
       </section>
    </div>
  )
}

export default Home
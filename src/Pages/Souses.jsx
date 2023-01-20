import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../components/Cards';
import { getSalad } from '../Redux/features/salads/saladsThunk';
import { getSouses } from '../Redux/features/souses/sousesThunk';
import { removeSouses } from '../Redux/features/souses/sousesThunk';

function Home({text}) {

  const dispatch = useDispatch();
  const {souses, status} = useSelector(state => state.souses)
  useEffect(() => {
			dispatch(getSouses())
    console.log(souses);

  }, []);

  const searchArr = souses.filter(item => {
    const titles = item.title.slice(0, item.title.search(" ")).toLowerCase().trim()+item.title.slice(item.title.search(" ")).toLowerCase().trim();
    if(titles.includes(text)){
      return item
    }
  })



  return (
    <div>
       <section className='grid grid-cols-3 gap-5'> 
       { searchArr.length > 0 ? searchArr.map(i => <Cards item={i} key={i.id} remove={removeSouses} />):
          <h1>Ничего не найденно</h1>
       }
       </section>
    </div>
  )
}

export default Home
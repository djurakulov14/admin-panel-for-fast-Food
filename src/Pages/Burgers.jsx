import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBurger } from "../Redux/features/burgers/burgersThunk";
import Cards from "../components/Cards";
const Burgers = ({text}) => {
  const dispatch = useDispatch();
  const { burgers, status3 } = useSelector((state) => state.burgers);
  useEffect(() => {
    dispatch(getBurger());
    console.log(burgers);
  }, []);

  const searchArr = burgers.filter(item => {
    const titles = item.title.slice(0, item.title.search(" ")).toLowerCase().trim()+item.title.slice(item.title.search(" ")).toLowerCase().trim();
    if(titles.includes(text)){
      return item
    }
  })

  return (
    <div>
      <section className="grid grid-cols-3 gap-5">
        { searchArr.length > 0 ? searchArr.map(i => <Cards item={i} key={i.id}/>):
          <h1>Ничего не найденно</h1>
       }
      </section>
    </div>
  );
};

export default Burgers;

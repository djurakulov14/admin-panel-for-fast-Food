import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import { getSalad, removeSalad } from "../Redux/features/salads/saladsThunk";

const Salads = ({text}) => {
  const dispatch = useDispatch();
  const { salads, status } = useSelector((state) => state.salads);
  useEffect(() => {
    dispatch(getSalad());
    console.log(salads);
  }, []);

  const searchArr = salads.filter((item) => {
    const titles =
      item.title.slice(0, item.title.search(" ")).toLowerCase().trim() +
      item.title.slice(item.title.search(" ")).toLowerCase().trim();
    if (titles.includes(text)) {
      return item;
    }
  });

  return (
    <div>
      <section className="grid grid-cols-3 gap-5">
        { searchArr.length > 0 ? searchArr.map(i => <Cards item={i} key={i.id} remove={removeSalad} />):
          <h1>Ничего не найденно</h1>
       }
      </section>
    </div>
  );
};

export default Salads;

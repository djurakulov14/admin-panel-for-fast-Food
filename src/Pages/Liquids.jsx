import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import {
  getLiquids,
  removeLiquids,
} from "../Redux/features/liquid/liquidThunk";

const Liquids = ({ text }) => {
  const dispatch = useDispatch();
  const { liquids, status } = useSelector((state) => state.liquid);
  useEffect(() => {
    dispatch(getLiquids());
  }, []);

  const searchArr = liquids.filter((item) => {
    const titles =
      item.title.slice(0, item.title.search(" ")).toLowerCase().trim() +
      item.title.slice(item.title.search(" ")).toLowerCase().trim();
    if (titles.includes(text)) {
      return item;
    }
  });

  console.log(liquids);
  return (
    <div>
      <section className="grid grid-cols-3 gap-5">
        {searchArr.length > 0 ? (
          searchArr.map((i) => (
            <Cards item={i} key={i.id} remove={removeLiquids} />
          ))
        ) : (
          <h1>Ничего не найденно</h1>
        )}
      </section>
    </div>
  );
};

export default Liquids;

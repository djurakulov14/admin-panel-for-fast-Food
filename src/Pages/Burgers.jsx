import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBurger } from "../Redux/features/burgers/burgersThunk";
import Cards from "../components/Cards";
const Burgers = () => {
  const dispatch = useDispatch();
  const { burgers, status3 } = useSelector((state) => state.burgers);
  useEffect(() => {
    dispatch(getBurger());
    console.log(burgers);
  }, []);
  return (
    <div>
      <section className="grid grid-cols-3 gap-5">
        {burgers.map((i) => (
          <Cards item={i} key={i.id} />
        ))}
      </section>
    </div>
  );
};

export default Burgers;

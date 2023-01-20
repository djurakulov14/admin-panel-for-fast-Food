import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import { getPizzas, removePizzas } from "../Redux/features/pizzas/pizzaThunk";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Pizzas = ({ text }) => {
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const { pizzas, status } = useSelector((state) => state.pizzas);

  const removeItem = (id) => {
    dispatch(removePizzas(id)).then((res) => {
      console.log(res);
      // if(res.payload.res.ok) {
      // 	toast('Item removed')
      // 	setUpdate(!update)
      // }
    });
  };

  useEffect(() => {
    dispatch(getPizzas());
  }, [update]);

  const searchArr = pizzas.filter((item) => {
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
        {searchArr.length > 0 ? (
          searchArr.map((i) => (
            <Cards item={i} key={i.id} removeItem={removeItem} />
          ))
        ) : (
          <h1>Ничего не найденно</h1>
        )}
        <ToastContainer />
      </section>
    </div>
  );
};

export default Pizzas;

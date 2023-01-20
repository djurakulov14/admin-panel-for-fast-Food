import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Cards from "../components/Cards";

const ProductsView = ({ dataName, fetchThunk, removeItemThunk, text }) => {
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const state = useSelector((state) => state[dataName]); // state.burgers
  const data = state[dataName];

  const removeItem = (id) => {
    console.log(id);
    dispatch(removeItemThunk(id)).then((res) => {
      if (res.status) {
        toast("Item removed");
      } else {
        toast("Something went wrong");
      }
    });
  };

  useEffect(() => {
    dispatch(fetchThunk());
  }, [update]);

  const searchArr = data.filter((item) => {
    const titles =
      item.title.slice(0, item.title.search(" ")).toLowerCase().trim() +
      item.title.slice(item.title.search(" ")).toLowerCase().trim();
    if (titles.includes(text)) {
      return item;
    }
  });

  return (
    <>
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
    </>
  );
};

export default ProductsView;

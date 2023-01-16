import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
const Cards = ({ item, remove }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
        <div className="w-full h-auto bg-no-repeat bg-cover">
          <img className="rounded-t-lg w-full" src={item.img} alt="" />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl h-16 font-bold tracking-tight text-gray-900">
            {item.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700">{item.body}</p>
          <p className="mb-3 font-normal text-gray-700">{item.price}</p>
          <div className="flex gap-1">
            <button
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              onClick={() => dispatch(remove(item.id))}
            >
              Удалить продукт
              <MdDeleteOutline size={"20px"} />
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Изменить данные
              <AiOutlineEdit size={"20px"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

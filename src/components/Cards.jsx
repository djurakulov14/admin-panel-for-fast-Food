import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBurger } from "../Redux/features/burgers/burgersThunk";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";

const Cards = ({ item, removeItem }) => {
	return (
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
			<a href="#">
				<img className="rounded-t-lg" src={item.img} alt="" />
			</a>
			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
						{item.title}
					</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700">{item.body}</p>
				<p className="mb-3 font-normal text-gray-700">{item.price}</p>

				<div className="flex gap-1">
					<button
						className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
						onClick={() => removeItem(item.id)}
					>
						Удалить продукт
						<MdDeleteOutline size={"20px"} />
						{/* <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
					</button>
					<button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
						Изменить данные
						<AiOutlineEdit size={"20px"} />
						{/* <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cards;

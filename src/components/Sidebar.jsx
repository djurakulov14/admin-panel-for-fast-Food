import React from "react";
import SidebarItem from "./childs/SidebarItem";
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from "react-router-dom";
import burgerImg from '../resources/hamburger.svg'
function Sidebar() {
  const arr = [
    {
      id: uuidv4(),
      name: 'Бургеры',
      img: burgerImg,
      pathName: "/"
    },
    {
      id: uuidv4(),
      name: 'Салаты',
      img: '/img/salad.png',
      pathName: "/salads"
    },
    {
      id: uuidv4(),
      name: 'Напитки',
      img: '/img/liquid_icon.svg',
      pathName: "/liquids"
    },
    {
      id: uuidv4(),
      name: 'Соусы',
      img: '/img/souses.png',
      pathName: "/souses"
    },
    {
      id: uuidv4(),
      name: 'Дессерты',
      img: '/img/dessert.png',
      pathName: "/desserts"
    },
    {
      id: uuidv4(),
      name: 'Пицца',
      img: '/img/pizza.png',
      pathName: "/pizzas"
    }
    ]
  return (
    <div className="w-1/5 fixed top-0 left-0 h-screen bg-[#F6AD31] p-5 border-black border-r-2">
      <div className="flex flex-col items-center gap-2 mb-5">
        <img src="/images/admin.png" className="w-20" alt="" />
        <h1 className="text-3xl font-bold">LOFT BURGERS</h1>
        <hr className="border-[2px] rounded-md w-full border-black " />
      </div>
      <div className="flex items-start gap-3 flex-col">
        <h2 className="text-xl font-semibold">Продукты</h2>
        <div className="w-full">
          {
            arr.map((i, index) => (
              index === 0 ? <NavLink to='/' className='link'>
                <SidebarItem key={i.id} i={i}/>
                </NavLink> : null
            ))
          }
          {
            arr.map((i, index) => (
              index === 1 ? <NavLink to='/salads' className='link'>
                <SidebarItem key={i.id} i={i}/>
                </NavLink> : null
            ))
          }
          {
            arr.map((i, index) => (
              index === 2 ? <NavLink to='/liquids' className='link'>
                <SidebarItem key={i.id} i={i}/>
                </NavLink> : null
            ))
          }
          {
            arr.map((i, index) => (
              index === 3 ? <NavLink to='/souses' className='link'>
                <SidebarItem key={i.id} i={i}/>
                </NavLink> : null
            ))
          }
          {
            arr.map((i, index) => (
              index === 4 ? <NavLink to='/desserts' className='link'>
                <SidebarItem key={i.id} i={i}/>
                </NavLink> : null
            ))
          }
          {
            arr.map((i, index) => (
              index === 5 ? <NavLink to='/pizzas' className='link'>
                <SidebarItem key={i.id} i={i}/>
                </NavLink> : null
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

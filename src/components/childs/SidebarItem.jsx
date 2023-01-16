import React from "react";
import { useLocation } from 'react-router-dom';

function SidebarItem({i}) {
  const location = useLocation()
  // console.log(location.pathname);

  return (
    <div className={i.pathName === location.pathname ? "w-ful p-2 cursor-pointer shadow-md border-b-2 border-black transition ease-in flex items-center gap-5" : "w-ful p-2 cursor-pointer hover:shadow-md hover:border-b-2 border-black transition ease-in flex items-center gap-5"}>
      <img src={i.img} className="w-12" alt="" />
      <p className="text-lg font-semibold">{i.name}</p>
    </div>
  );
}

export default SidebarItem;
// 
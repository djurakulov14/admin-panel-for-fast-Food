import React from "react";
import SidebarItem from "./childs/SidebarItem";

function Sidebar() {
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
            <SidebarItem/>
            <SidebarItem/>
            <SidebarItem/>
            <SidebarItem/>
            <SidebarItem/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

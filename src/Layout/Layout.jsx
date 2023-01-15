import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full">
      <div className="w-1/5 fixed top-0 left-0 h-screen bg-[#c4c4c4]">
        <h2>бокавой панель</h2>
      </div>
      <header className="w-full h-20 bg-slate-600 fixed top-0 left-[22%]">
        <p>Header</p>
      </header>
      <div className="mt-32 ml-[22%] bg-gray-400 mr-[2%]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

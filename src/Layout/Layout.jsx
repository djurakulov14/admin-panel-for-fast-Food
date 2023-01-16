import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Layout() {
  return (
    <div className="w-full pt-36 bg-[#F6AD31] min-h-screen">
      <Sidebar/>
      <Header/>
      <div className="ml-[22%] mr-[2%]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

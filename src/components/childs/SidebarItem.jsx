import React from "react";

function SidebarItem({i}) {
  return (
    <div className="w-ful p-2 cursor-pointer hover:shadow-md hover:border-b-2 border-black transition ease-in flex items-center gap-5">
      <img src="/img/burger_icon.svg" className="w-12" alt="" />
      <p className="text-lg font-semibold">{i.name}</p>
    </div>
  );
}

export default SidebarItem;

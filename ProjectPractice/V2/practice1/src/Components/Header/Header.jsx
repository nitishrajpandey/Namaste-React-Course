import React from "react";
// src=""
function Header() {
  return (
    <div className="flex justify-between items-center px-5 py-2 bg-[#F0F0F0]">
      <div>
        <img
          className="w-[50px] rounded-full"
          src="https://cdn.pixabay.com/photo/2016/06/22/08/40/atom-1472657_640.png"
          alt=" logo"
        />
      </div>
      <div className="">
        <ul className="flex justify-between gap-10 text-black font-semibold text-xl">
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

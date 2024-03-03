import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center px-10 bg-[#F0F0F0]">
      <div>
        <img
          className="w-[80px] rounded-full"
          src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"
          alt=""
        />
      </div>
      <div className="mr-20">
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

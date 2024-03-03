import React from "react";
import { LOGO_URL } from "../../utils/constants";

function Header() {
  return (
    <div className="flex justify-between items-center px-10 bg-[#F0F0F0]">
      <div>
        <img className="w-[80px] rounded-full" src={LOGO_URL} alt="" />
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

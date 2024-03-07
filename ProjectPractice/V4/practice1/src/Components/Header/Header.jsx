import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// src=""
function Header() {
  const [buttonText, setButtonText] = useState("Login");

  const handelButtonText = () => {
    return buttonText === "Login"
      ? setButtonText("Logout")
      : setButtonText("Login");
  };

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
        <ul className="flex justify-between items-center gap-10 text-black font-semibold text-xl">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <button
            className="px-3 py-2 bg-green-500 text-black rounded-lg"
            onClick={handelButtonText}
          >
            {buttonText}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;

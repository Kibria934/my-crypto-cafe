import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between">
      <div className="hidden font-bold text-gray-500 md:block font-sans text-xl">
        {" "}
        <Link to={"/"}>Cripto cafe</Link>
      </div>
      <div className="flex gap-6 pr-15 text-xl">
        <CustomLink to={"/"}>Home</CustomLink>
        <CustomLink to={"/coins"}>Coins</CustomLink>
        <CustomLink to={"/contact"}>Contact</CustomLink>
        <CustomLink to={"/about"}>About</CustomLink>
      </div>
    </div>
  );
};

export default Header;

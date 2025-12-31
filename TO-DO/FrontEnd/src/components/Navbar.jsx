import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-700 text-white  px-10 py-15 flex justify-between items-center">
        <h1 className="text-2xl">
          <Link to="/">TO-DO</Link>
        </h1>
        <ul className="flex gap-5 [*&]:text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

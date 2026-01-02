import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-700 text-white flex justify-around items-center sticky top-0 shadow-md shadow-gray-600  ">
        <h1 className="text-2xl font-bold text-yellow-500 ">
          <Link to="/">
            <span className="text-3xl text-white animate-pulse ">My</span> TO-DO
          </Link>
        </h1>
        <ul className="flex gap-5 [*&]:text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/addTask">AddTask</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

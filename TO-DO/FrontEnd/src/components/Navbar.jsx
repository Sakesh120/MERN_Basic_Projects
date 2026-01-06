import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  const [login, setLogin] = useState(localStorage.getItem("login"));
  const logOut = () => {
    localStorage.removeItem("login");
    setLogin(null);
    return <Navigate to="/" replace />;
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setLogin(localStorage.getItem("login"));
    };
    window.addEventListener("storage-change", handleStorageChange);
    return () => {
      window.removeEventListener("storage-change", handleStorageChange);
    };
  }, []);

  return (
    <>
      <nav className="bg-gray-700 text-white flex justify-around items-center sticky top-0 shadow-md shadow-gray-600 z-9999 ">
        <h1 className="lg:text-2xl text-md font-bold text-yellow-500 ">
          <Link to="/">
            <span className="lg:text-3xl text-xl text-white animate-pulse  ">
              My
            </span>
            TO-DO
          </Link>
        </h1>
        <ul className="flex gap-5 lg:[*&]:text-xl *:text-md">
          {login ? (
            <>
              <li>
                <Link to="/list">List</Link>
              </li>
              <li>
                <Link to="/addTask">AddTask</Link>
              </li>
              <li>
                <Link onClick={logOut} to="/">
                  LogOut
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("login")) {
      navigate("/list");
    }
  });

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3200/login", {
      method: "post",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "Application/Json",
      },
    });
    const result = await response.json();
    if (result.success) {
      document.cookie = `token=${result.token}`;
      localStorage.setItem("login", userData.email);
      window.dispatchEvent(new Event("storage-change"));
      navigate("/list");
    } else {
      alert("error Occured");
    }
  };
  return (
    <>
      <div className=" max-w-[40vw] max-h-[60vh] p-4 m-auto relative top-20 rounded-[15px] flex flex-col items-center ">
        <h1 className="text-center text-2xl lg:text-3xl font-bold my-2">
          Login
        </h1>
        <div className="flex flex-col gap-3 m- min-w-75  lg:w-125 shadow-sm shadow-gray-600 p-2 lg:p-4 rounded-[15px] bg-[#f4eded]">
          <label htmlFor="" className="text-xl font-semibold underline ">
            Email:
          </label>
          <input
            type="email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            placeholder="Enter the email address..."
            className="border  py-1 px-2 rounded-[5px] border-gray-400 "
            required
          />
          <label htmlFor="" className="text-xl font-semibold underline ">
            Password:
          </label>
          <input
            type="password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            placeholder="Enter the password..."
            className="border  py-1 px-2 rounded-[5px] border-gray-400 "
            required
          />

          <button
            onClick={handleLogin}
            className="bg-blue-400 rounded-[5px]  py-1 hover:bg-blue-500 cursor-pointer text-white font-bold"
          >
            Login
          </button>
          <Link to={"/signup"} className="text-blue-600">
            Sign Up...
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;

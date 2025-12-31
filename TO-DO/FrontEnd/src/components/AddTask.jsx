import React from "react";

const AddTask = () => {
  return (
    <>
      <div className=" max-w-[40vw] max-h-[60vh] p-4 m-auto relative top-20 rounded-[15px] flex flex-col items-center ">
        <h1 className="text-center text-2xl lg:text-3xl font-bold my-2">
          Add Task
        </h1>
        <form
          action=""
          className="flex flex-col gap-3 m- min-w-75  lg:w-125 shadow-sm shadow-gray-600 p-2 lg:p-4 rounded-[15px] bg-[#f4eded]"
        >
          <label htmlFor="" className="text-xl font-semibold underline ">
            Title:
          </label>
          <input
            type="text"
            placeholder="Enter the title..."
            className="border  py-1 px-2 rounded-[5px] border-gray-400 "
          />
          <label htmlFor="" className="text-xl font-semibold underline">
            Description:
          </label>
          <textarea
            name="description"
            id=""
            placeholder="give description.."
            className=" min-h-30 resize-y border p-2 rounded-[5px] border-gray-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-400 rounded-[5px]  py-1 hover:bg-blue-500 cursor-pointer text-white font-bold"
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTask;

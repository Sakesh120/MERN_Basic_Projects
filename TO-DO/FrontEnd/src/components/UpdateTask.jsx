import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTask = () => {
  const [taskData, setTaskData] = useState(null);
  const naviagte = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getTask(id);
  }, [id]);

  const getTask = async (id) => {
    let task = await fetch(`http://localhost:3200/task/${id}`);
    task = await task.json();
    if (task.data) {
      setTaskData(task.data);
    } else {
      navigate("/list");
    }
  };

  const handleUpdate = async () => {
    let task = await fetch("http://localhost:3200/updateTask", {
      method: "PUT",
      body: JSON.stringify(taskData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    task = await task.json();
    if (task) {
      naviagte("/list");
    }
  };

  return (
    <>
      <div className=" max-w-[40vw] max-h-[60vh] p-4 m-auto relative top-20 rounded-[15px] flex flex-col items-center ">
        <h1 className="text-center text-2xl lg:text-3xl font-bold my-2">
          Update My Task
        </h1>
        <div className="flex flex-col gap-3 m- min-w-75  lg:w-125 shadow-sm shadow-gray-600 p-2 lg:p-4 rounded-[15px] bg-[#f4eded]">
          <label htmlFor="" className="text-xl font-semibold underline ">
            Title:
          </label>
          <input
            value={taskData?.title || ""}
            onChange={(e) =>
              setTaskData((prev) => ({ ...prev, title: e.target.value }))
            }
            type="text"
            placeholder="Enter the title..."
            className="border  py-1 px-2 rounded-[5px] border-gray-400 "
            required
          />
          <label htmlFor="" className="text-xl font-semibold underline">
            Description:
          </label>
          <textarea
            value={taskData?.description || ""}
            onChange={(e) =>
              setTaskData((prev) => ({ ...prev, description: e.target.value }))
            }
            name="description"
            id=""
            placeholder="give description.."
            className=" min-h-30 resize-y border p-2 rounded-[5px] border-gray-400"
          ></textarea>
          <button
            onClick={() => handleUpdate()}
            className="bg-blue-400 rounded-[5px]  py-1 hover:bg-blue-500 cursor-pointer text-white font-bold"
          >
            Update Task
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateTask;

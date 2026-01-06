import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [tasksList, setTasksList] = useState();
  const [selectedTask, setSelectedTask] = useState([]);

  useEffect(() => {
    getListData();
  }, []);

  const getListData = async () => {
    let list = await fetch("http://localhost:3200/tasks", {
      credentials: "include",
    });
    list = await list.json();
    if (list.success) {
      setTasksList(list.data);
    }
  };

  const deleteTask = async (id) => {
    let item = await fetch(`http://localhost:3200/delete/${id}`, {
      method: "delete",
      credentials: "include",
    });
    item = await item.json();
    if (item.success) {
      getListData();
    } else {
      alert("error occured");
    }
  };

  const selectAll = (event) => {
    if (event.target.checked) {
      let items = tasksList.map((item) => item._id);
      setSelectedTask(items);
    } else {
      setSelectedTask([]);
    }
  };

  const selectSingleItem = (id) => {
    if (selectedTask.includes(id)) {
      let items = selectedTask.filter((item) => item != id);
      setSelectedTask(items);
    } else {
      setSelectedTask([id, ...selectedTask]);
      console.log(selectedTask);
    }
  };

  const deleteMultiple = async () => {
    ///// method 1
    // for (let task of selectedTask) {
    //   deleteTask(task);
    // }
    ////// above method is also works correcty but make our web slower due to multiple calls

    ////// method 2

    let item = await fetch(`http://localhost:3200/delete-multiple`, {
      method: "delete",
      body: JSON.stringify(selectedTask),
      headers: {
        "Content-Type": "Application/Json",
      },
      credentials: "include",
    });
    item = await item.json();
    if (item.success) {
      getListData();
    } else {
      alert("error occured");
    }
  };

  return (
    <div className="flex flex-col items-center lg:my-5 my-1">
      <h1 className="lg:text-3xl text-2xl font-bold text-center ">My Tasks</h1>
      <button
        onClick={deleteMultiple}
        className="self-start md:ml-[13vw] ml-2 text-white md:w-25 font-semibold cursor-pointer hover:bg-red-800 rounded-sm md:p-1 px-1 md:px-2 text-[12px] md:text-lg bg-red-600"
      >
        Delete All
      </button>
      <ul className="grid gap-1 md:gap-2.5 list-none p-0 md:m-5 m-1 md:grid-cols-[50px_60px_1fr_2fr_200px] grid-cols-[30px_50px_1fr_2fr_100px]">
        <li onChange={selectAll} className="list-header text-center  ">
          <input type="checkbox" className="cursor-pointer" />
        </li>
        <li className="list-header text-center">S.NO</li>
        <li className="list-header">Title</li>
        <li className="list-header">Description</li>
        <li className="list-header text-center">Action</li>
        {tasksList &&
          tasksList.map((item, index) => (
            <Fragment key={item._id}>
              <li className="list-item text-center ">
                <input
                  onChange={() => selectSingleItem(item._id)}
                  type="checkbox"
                  checked={selectedTask.includes(item._id)}
                  className="cursor-pointer"
                />
              </li>
              <li className="list-item text-center">{index + 1}</li>
              <li className="list-item ">{item.title}</li>
              <li className="list-item">{item.description}</li>
              <li className=" bg-[#ebe5e5] rounded-[5px] border-[#877e7e] flex justify-center items-center md:gap-3 gap-1 border text-center">
                <button
                  onClick={() => deleteTask(item._id)}
                  className=" text-white md:w-[40%] text-[12px] md:text-lg  font-semibold cursor-pointer hover:bg-red-800 rounded-sm md:p-1 md:px-2 p-[0.2px] px-1 bg-red-600"
                >
                  Delete
                </button>
                <Link
                  to={`/update/${item._id}`}
                  className=" text-white md:w-[40%] text-[12px] md:text-lg  font-semibold cursor-pointer hover:bg-green-700 rounded-sm md:p-1 md:px-2 p-[0.2px] px-1 bg-green-600"
                >
                  Update
                </Link>
              </li>
            </Fragment>
          ))}
      </ul>
    </div>
  );
};

export default List;

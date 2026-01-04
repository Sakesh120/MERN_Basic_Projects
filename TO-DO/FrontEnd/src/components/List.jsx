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
    let list = await fetch("http://localhost:3200/tasks");
    list = await list.json();
    if (list.success) {
      setTasksList(list.data);
    }
  };

  const deleteTask = async (id) => {
    let item = await fetch(`http://localhost:3200/delete/${id}`, {
      method: "delete",
    });
    item = await item.json();
    if (item.success) {
      getListData();
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
    });
    item = await item.json();
    if (item.success) {
      getListData();
    }
  };

  return (
    <div className="flex flex-col items-center my-5">
      <h1 className="text-3xl font-bold text-center ">My Tasks</h1>
      <button
        onClick={deleteMultiple}
        className="self-start ml-[13vw] text-white w-25 font-semibold cursor-pointer hover:bg-red-800 rounded-sm p-1 px-2 bg-red-600"
      >
        Delete All
      </button>
      <ul className="grid gap-2.5 list-none p-0 m-5 grid-cols-[50px_60px_1fr_2fr_200px]">
        <li onChange={selectAll} className="list-header text-center ">
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
              <li className="list-item">{item.title}</li>
              <li className="list-item">{item.description}</li>
              <li className=" bg-[#ebe5e5] rounded-[5px] border-[#877e7e] flex justify-center items-center gap-3 border text-center">
                <button
                  onClick={() => deleteTask(item._id)}
                  className=" text-white w-[40%] font-semibold cursor-pointer hover:bg-red-800 rounded-sm p-1 px-2 bg-red-600"
                >
                  Delete
                </button>
                <Link
                  to={`/update/${item._id}`}
                  className=" text-white w-[40%] font-semibold cursor-pointer hover:bg-green-700 rounded-sm p-1 px-2 bg-green-600"
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

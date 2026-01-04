import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddTask from "./components/AddTask";
import List from "./components/List";
import UpdateTask from "./components/updateTask";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/list" element={<List />} />
        <Route path="/update/:id" element={<UpdateTask />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

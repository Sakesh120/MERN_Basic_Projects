import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddTask from "./components/AddTask";
import List from "./components/List";
import UpdateTask from "./components/updateTask";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Protected from "./components/Protected";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/addTask"
          element={
            <Protected>
              <AddTask />
            </Protected>
          }
        />
        <Route
          path="/list"
          element={
            <Protected>
              <List />
            </Protected>
          }
        />
        <Route path="/update/:id" element={<UpdateTask />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddTask from "./components/AddTask";
import List from "./components/List";
import UpdateTask from "./components/updateTask";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/list" element={<List />} />
        <Route path="/update/:id" element={<UpdateTask />} />
      </Routes>
    </>
  );
}

export default App;

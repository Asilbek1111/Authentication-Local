import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashbard";
import { useContext } from "react";
import MyContext from "./Contexts/MyContext";

function App() {
  const {open, setOpen} = useContext(MyContext);
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path={open? "/dashboard" : null} element={<Dashboard />} />
    </Routes>
  );
}

export default App;

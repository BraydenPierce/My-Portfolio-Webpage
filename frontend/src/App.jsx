import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { Route, Routes } from "react-router-dom";

import axios from "axios";
import NavBar from "./components/Navbar";
import Home from "./pages/home";
import Xp from "./pages/xp";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Register from "./pages/register";

// send cookies every request (need for sessions to work)
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Xp />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;

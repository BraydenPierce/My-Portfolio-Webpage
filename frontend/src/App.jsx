import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { Route, Routes } from "react-router-dom";

import axios from "axios";
import NavBar from "./components/Navbar";
import Home from "./pages/home";

// send cookies every request (need for sessions to work)
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;

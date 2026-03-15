import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "bootstrap/dist/js/bootstrap.js";

import { Route, Routes } from "react-router-dom";

import axios from "axios";
import NavBar from "./components/Navbar";
import Home from "./pages/home";
import Xp from "./pages/xp";
import Portfolio from "./pages/portfolio";
import Hobbies from "./pages/hobbies";
import Login from "./pages/login";
import Register from "./pages/register";
import { useEffect, useState } from "react";

// send cookies every request (need for sessions to work)
axios.defaults.withCredentials = true;

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  useEffect(() => {
    fetch("http://localhost:4000/users/session", { credentials: "include" })
      .then(r => r.json())
      .then(data => setIsAuthenticated(!!data.isLoggedIn))
      .catch(() => setIsAuthenticated(false));
}, []);

  return (
    <>
      <NavBar 
        isAuthenticated={isAuthenticated} 
        onLogoutSuccess={() => setIsAuthenticated(false)} 
        onToggleTheme={toggleTheme} 
        theme={theme}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Xp />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route 
          path="/login" 
          element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />} 
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;

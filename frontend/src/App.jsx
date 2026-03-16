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
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  const refreshSession = async () => {
    try {
      const res = await fetch("http://localhost:4000/users/session", {
        credentials: "include",
      });
      const data = await res.json();

      if (data.isLoggedIn) {
        setIsAuthenticated(true);
        setUser({
          username: data.username,
          accType: data.accType,
        });
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  useEffect(() => {
    refreshSession();
  }, []);

  return (
    <>
      <NavBar
        isAuthenticated={isAuthenticated}
        onLogoutSuccess={() => {
          setIsAuthenticated(false);
          setUser(null);
        }}
        onToggleTheme={toggleTheme}
        theme={theme}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Xp />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/hobbies" element={<Hobbies isAdmin={user?.accType === "Admin"} />} />
        <Route
          path="/login"
          element={<Login onLoginSuccess={refreshSession} />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import "./Home";
import "./About";
import "./Contact";
function App() {
  return (
    <div className="homePage">
      <h1>Welcome to React Router</h1>
      <nav className="links">
        <Link to={"/"} className="router-link">
          Home
        </Link>
        <Link to={"/about"} className="router-link">
          About
        </Link>
        <Link to={"/contact"} className="router-link">
          Contact
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

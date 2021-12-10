import React from "react";
import { Link, Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;

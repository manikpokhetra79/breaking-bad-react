import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="navbar">
        <nav >
          <Link to="/">Home</Link>
          <Link to="/characters">Characters</Link>
        </nav>{" "}
        <button onClick={goBack} className="back-btn">
          Back
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default App;

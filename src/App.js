import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  const [characters, setcharacters] = useState([]);
  useEffect(() => {
    fetch("https://breakingbadapi.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setcharacters(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/characters" state={characters}>
          Characters
        </Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default App;

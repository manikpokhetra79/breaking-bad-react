import React from "react";
import { Link, useLocation } from "react-router-dom";
const List = () => {
  const { state } = useLocation();
  return (
    <ul>
      {state.map((character) => (
        <li key={character.char_id}>
          <Link to="/character" state={character}>
            {character.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;

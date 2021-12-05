import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const List = () => {
  let navigate = useNavigate();
  const { state: characters } = useLocation();
  let handleClick = (character) => {
    navigate("/character", { state: { character } });
  };
  return (
    <main>
      <div className="text-center">
        <h2>Characters List</h2>
      </div>
      <div className="main-list">
        {characters.map((character) => (
          <div className="card" key={character.char_id}>
            <div className="img-wrapper">
              <img src={character.img} alt="Avatar" />
            </div>
            <div className="container" onClick={() => handleClick(character)}>
              <h3 className="text-center char-name"> {character.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default List;

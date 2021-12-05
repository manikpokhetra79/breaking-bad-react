import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../stylesheets/card.css";
const Card = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { character } = location.state;
  // console.log(location);
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button onClick={goBack} className="back-btn">
        Go Back
      </button>
      <h2 className="text-center">Character Bio</h2>
      <div className="character-card">
        <div className="left-container">
          <div className="img-container">
            <img src={character.img} alt="character-pic" />
          </div>
        </div>
        <div className="right-container">
          <p>
            <b>Character name : </b>
            {character.name}
          </p>
          <p>
            <b>Birthdate:</b> {character.birthday}
          </p>
          <p>
            <b>Occupation : &nbsp;</b>
            {character.occupation.map((occupation, index) => (
              <span key={index}>{(index ? ", " : "") + occupation}</span>
            ))}
          </p>
          <p>
            <b>Status :</b> {character.status}
          </p>
          <p>
            <b>Nickname : </b>
            {character.nickname}
          </p>
          <p>
            <b>Portrayed by :</b> {character.portrayed}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;

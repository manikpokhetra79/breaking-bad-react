import React from "react";
import { useLocation } from "react-router";
const Card = () => {
  const { state } = useLocation();

  return (
    <div>
      <p>Hi i am {state.name}</p>
      <img src={state.img} alt="character-pic" />
    </div>
  );
};

export default Card;

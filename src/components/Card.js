import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../stylesheets/card.css";
import ErrorBoundary from "./ErrorBoundary";
import ReactLoading from "react-loading";
const Card = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const { character } = location.state;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      setLoading(true);
    };
  }, [setLoading]);

  return (
    <>
      <ErrorBoundary>
        <div className="bio-header">
          {" "}
          <h2 className="text-center">{character?.name} Bio </h2>{" "}
        </div>
        {loading ? (
          <div className="loader top20">
            <ReactLoading
              type="bars"
              color="green"
              height={"10%"}
              width={"10%"}
            />
          </div>
        ) : (
          <div className="character-card">
            <div className="left-container">
              <div className="img-container">
                <img src={character?.img} alt="character-pic" />
              </div>
            </div>
            <div className="right-container">
              <p>
                <b>Character name : </b>
                {character?.name}
              </p>
              <p>
                <b>Birthdate:</b> {character?.birthday}
              </p>
              <p>
                <b>Occupation : &nbsp;</b>
                {character?.occupation.map((occupation, index) => (
                  <span key={index}>{(index ? ", " : "") + occupation}</span>
                ))}
              </p>
              <p>
                <b>Status :</b> {character?.status}
              </p>
              <p>
                <b>Nickname : </b>
                {character?.nickname}
              </p>
              <p>
                <b>Portrayed by :</b> {character?.portrayed}
              </p>
            </div>
          </div>
        )}
      </ErrorBoundary>
    </>
  );
};

export default Card;

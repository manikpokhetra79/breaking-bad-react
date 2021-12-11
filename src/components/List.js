import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import ErrorBoundary from "./ErrorBoundary";

const List = () => {
  let [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  const [characters, setcharacters] = useState([]);

  useEffect(() => {
    fetch("https://breakingbadapi.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setcharacters(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    return () => {};
  }, []);
  let handleClick = (character) => {
    navigate(`/character/${character.name}`, { state: { character } });
  };
  return (
    <ErrorBoundary>
      <main className="main-body">
        {loading ? (
          <div className="loader">
            <ReactLoading
              type="bars"
              color="red"
              height={"10%"}
              width={"10%"}
            />
          </div>
        ) : (
          <div className="text-center">
            <h2>Characters List</h2>
            {characters?.length > 0 ? (
              <div className="main-list">
                {characters?.map((character) => (
                  <div className="card" key={character?.char_id}>
                    <div className="img-wrapper">
                      <img src={character?.img} alt="Avatar" />
                    </div>
                    <div
                      className="container"
                      onClick={() => handleClick(character)}
                    >
                      <h3 className="text-center char-name">
                        {" "}
                        {character?.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Some Error occurred. Please refresh the page.</p>
            )}
          </div>
        )}
      </main>
    </ErrorBoundary>
  );
};

export default List;

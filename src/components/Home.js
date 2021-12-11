import React from "react";

const Home = () => {
  return (
    <div style={{ margin: "1rem" }}>
      <h1 className="text-center" style={{ fontSize: "40px" }}>
        The Breaking Bad Hub.
      </h1>
      <p>
        A Single Page web application where viewers can view all the characters
        of Breaking Bad franchise shows and movies.
      </p>
      <h2>Features:</h2>
      <p>List all the Characters with its Name.</p>
      <p>
        Seperate page for individual characters based on the viewers choosing.
      </p>
      <p>
        Check Documentaion of used Api.{" "}
        <a
          href="https://breakingbadapi.com/documentation"
          target="_blank"
          rel="noreferrer noopener"
        >
          Visit Api site
        </a>
      </p>
    </div>
  );
};

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
const Page404 = () => {
  const navigate = useNavigate();
  const goBacktoHome = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1 className="text-center mt-3">Ooops! No data found. Please go back to home page.</h1>
      <button onClick={goBacktoHome} className="back-btn">
        Go Back
      </button>
    </div>
  );
};

export default Page404;

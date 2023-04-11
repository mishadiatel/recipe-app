import React from "react";

const ResultsTitle = ({ searchFood }) => {
  return (
    <div className="results-amount">
      <div className="results-amount__container container">
        <p className="result-amount-text">{`Results for "${searchFood}"`}</p>
      </div>
    </div>
  );
};

export default ResultsTitle;

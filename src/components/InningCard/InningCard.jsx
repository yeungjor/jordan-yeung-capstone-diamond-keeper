import "./InningCard.scss";
import React from "react";

function InningCard({ inning, index, handleScoreChange }) {
  return (
    <section className="inning">
      <div className="inning__container" key={index}>
        <div className="inning__score-control">
          <button
            className="score__button"
            onClick={() => handleScoreChange(index, "away", inning.away - 1)}
          >
            -
          </button>
          <input
            className="inning__score"
            type="number"
            value={inning.away}
            placeholder="Away Score"
          />
          <button
            className="score__button"
            onClick={() => handleScoreChange(index, "away", inning.away + 1)}
          >
            +
          </button>
        </div>
        <p className="inning__number">{index + 1}</p>
        <div className="inning__score-control">
          <button
            className="score__button"
            onClick={() => handleScoreChange(index, "home", inning.home - 1)}
          >
            -
          </button>
          <input
            className="inning__score"
            type="number"
            value={inning.home}
            placeholder="Home Score"
          />
          <button
            className="score__button"
            onClick={() => handleScoreChange(index, "home", inning.home + 1)}
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}

export default InningCard;

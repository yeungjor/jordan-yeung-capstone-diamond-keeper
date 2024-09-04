import "./PlayerCard.scss";

function PlayerCard({ playerName, jerseyNumber, bats, throws, gender }) {
  return (
    <>
      <div className="player-card">
        <p className="player-card__name">
          {playerName} #{jerseyNumber}
        </p>
        <p className="player-card__gender">{gender}</p>
        <p className="player-card__bats">{bats}</p>
        <p className="player-card__throws">{throws}</p>
      </div>
      <hr />
    </>
  );
}

export default PlayerCard;

import "./PlayerCard.scss";

function PlayerCard({ playerName, jerseyNumber, bats, throws, gender }) {
  return (
    <div className="player-card">
      <h2 className="player-card__name">{playerName}</h2>
      <p className="player-card__info">Jersey Number: {jerseyNumber}</p>
      <p className="player-card__info">Bats: {bats}</p>
      <p className="player-card__info">Throws: {throws}</p>
      <p className="player-card__info">Gender: {gender}</p>
    </div>
  );
}

export default PlayerCard;

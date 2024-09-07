import "./PlayerCard.scss";
import deleteIcon from "../../assets/icons/delete-button.jpg";

function PlayerCard({
  playerId,
  playerName,
  jerseyNumber,
  bats,
  throws,
  gender,
  onDeletePlayer,
}) {
  return (
    <>
      <div className="player-card">
        <p className="player-card__name">
          {playerName} #{jerseyNumber}
        </p>
        <p className="player-card__gender">{gender}</p>
        <p className="player-card__bats">{bats}</p>
        <p className="player-card__throws">{throws}</p>
        <button
          className="btn__delete-player"
          onClick={() => onDeletePlayer(playerId)}
        >
          <img className="btn__delete-img" src={deleteIcon} />
        </button>
      </div>
      <hr />
    </>
  );
}

export default PlayerCard;

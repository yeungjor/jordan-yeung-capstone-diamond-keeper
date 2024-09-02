import "./GameCard.scss";

function GameCard({ date, homeTeam, awayTeam, homeTeamRuns, awayTeamRuns }) {
  return (
    <>
      <div className="games-card">
        <p className="games-card-column">{date}</p>
        <p className="games-card-column--team">{homeTeam}</p>
        <p className="games-card-column">{homeTeamRuns}</p>
        <p className="games-card-column--team">{awayTeam}</p>
        <p className="games-card-column">{awayTeamRuns}</p>
      </div>
    </>
  );
}

export default GameCard;

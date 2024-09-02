import "./GameCard.scss";

function GameCard({ date, homeTeam, awayTeam, homeTeamRuns, awayTeamRuns }) {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <>
      <div className="games-card">
        <p className="games-card-column--date">{formattedDate}</p>
        <p className="games-card-column--team">{awayTeam}</p>
        <p className="games-card-column--score">{awayTeamRuns}</p>
        <p className="games-card-column--team">{homeTeam}</p>
        <p className="games-card-column--score">{homeTeamRuns}</p>
      </div>
      <hr />
    </>
  );
}

export default GameCard;

import "./GameCard.scss";
import { format } from "date-fns";

function GameCard({ date, homeTeam, awayTeam, homeTeamRuns, awayTeamRuns }) {
  const formattedDate = format(new Date(date), "dd-MMM-yyyy");

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

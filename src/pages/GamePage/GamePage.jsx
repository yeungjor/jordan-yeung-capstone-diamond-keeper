import "./GamePage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../../components/GameCard/GameCard";

function GamePage() {
  const [games, setGames] = useState([]);

  const URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

  useEffect(() => {
    // Fetch the games when the component mounts
    const fetchGames = async () => {
      try {
        const response = await axios.get(`${URL}/games`);
        console.log(response.data);
        if (response.data) {
          setGames(response.data);
        } else {
          console.error("Games data is undefined or not an array");
        }
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);
  return (
    <>
      <div className="games">
        <h1 className="games__header">Game History</h1>
        <div className="games__table">
          <div className="games__table-column-container">
            <p className="games__table-column">Date</p>
            <p className="games__table-column--team">Home</p>
            <p className="games__table-column">Score</p>
            <p className="games__table-column--team">Away</p>
            <p className="games__table-column">Score</p>
          </div>
          {games.map((game) => (
            <GameCard
              key={game.id}
              date={game.date}
              homeTeam={game.home_team_name}
              awayTeam={game.away_team_name}
              homeTeamRuns={game.home_team_runs}
              awayTeamRuns={game.away_team_runs}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default GamePage;

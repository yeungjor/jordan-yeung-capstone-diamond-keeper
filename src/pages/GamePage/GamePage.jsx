import "./GamePage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "../../components/GameCard/GameCard";

function GamePage() {
  const [games, setGames] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");

  const URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

  useEffect(() => {
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

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await axios.get(`${URL}/teams`);
        console.log(response.data.teams);
        if (response.data.teams) {
          setTeams(response.data.teams);
        } else {
          console.error("Teams data is undefined or not an array");
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    }

    fetchTeams();
  }, []);

  const filteredGames = selectedTeam
    ? games.filter((game) => {
        return (
          game.home_team_id === parseInt(selectedTeam) ||
          game.away_team_id === parseInt(selectedTeam)
        );
      })
    : games;

  return (
    <>
      <div className="games">
        <h1 className="games__header">Game History</h1>
        <div className="games__filter">
          <select
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
          >
            <option value="">All Teams</option>
            {teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.team_name}
              </option>
            ))}
          </select>
        </div>
        <div className="games__table">
          <div className="games__table-column games__table-column-container">
            <p className="games__table-column games__table-column--date">
              Date
            </p>
            <p className="games__table-column games__table-column--team">
              Away
            </p>
            <p className="games__table-column games__table-column--score">
              Score
            </p>
            <p className="games__table-column games__table-column--team">
              Home
            </p>
            <p className="games__table-column games__table-column--score">
              Score
            </p>
          </div>
          {filteredGames.map((game) => (
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

import "./TeamPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import PlayerCard from "../../components/PlayerCard/PlayerCard";

function TeamPage() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");

  const URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(`${URL}/teams`);
        setTeams(response.data.teams);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams();
  }, []);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(`${URL}/players`);
        console.log(response.data);
        setPlayers(response.data.players);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayers();
  }, []);

  const filteredPlayers = selectedTeam
    ? players.filter((player) => player.team_id === parseInt(selectedTeam))
    : players;

  return (
    <div className="team">
      <h1 className="team__header">Players by Team</h1>
      <div className="team__filter">
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
      <div className="team__players">
        {filteredPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            playerName={player.player_name}
            jerseyNumber={player.jersey_number}
            bats={player.bats}
            throws={player.throws}
            gender={player.gender}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamPage;

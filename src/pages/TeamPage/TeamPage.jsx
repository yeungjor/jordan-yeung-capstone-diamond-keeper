import "./TeamPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import PlayerModal from "../../components/PlayerModal/PlayerModal";

function TeamPage() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("1");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

  const fetchTeams = async () => {
    try {
      const response = await axios.get(`${URL}/teams`);
      setTeams(response.data.teams);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  const fetchPlayers = async () => {
    try {
      const response = await axios.get(`${URL}/players`);
      setPlayers(response.data.players);
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  useEffect(() => {
    if (selectedTeam) {
      fetchPlayers();
    }
  }, [selectedTeam]);

  const filteredPlayers = selectedTeam
    ? players.filter((player) => player.team_id === parseInt(selectedTeam))
    : players;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreatePlayer = async (newPlayer) => {
    try {
      await axios.post(`${URL}/players`, newPlayer);
      alert("Player created successfully!");
      fetchPlayers();
    } catch (error) {
      console.error("Error creating player", error.response.data);
      alert("Error creating player");
    }
  };

  const handleDeletePlayer = async (playerId) => {
    try {
      await axios.delete(`${URL}/players/${playerId}`);
      alert("Player deleted successfully!");
      fetchPlayers();
    } catch (error) {
      console.error("Error deleting player:", error);
      alert("Error deleting player");
    }
  };

  return (
    <div className="players">
      <h1 className="team__header">Team Roster</h1>
      <div className="team__filter">
        <select
          className="team__select"
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.team_name}
            </option>
          ))}
        </select>
      </div>
      <div className="players__table">
        <div className="players__table-column players__table-column-container">
          <p className="players__table-column players__table-column--name">
            Player
          </p>
          <p className="players__table-column players__table-column--gender">
            Gender
          </p>
          <p className="players__table-column players__table-column--bats">
            Bats
          </p>
          <p className="players__table-column players__table-column--throws">
            Throws
          </p>
          <div className="spacer"></div>
        </div>

        {filteredPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            playerId={player.id}
            playerName={player.player_name}
            jerseyNumber={player.jersey_number}
            bats={player.bats}
            throws={player.throws}
            gender={player.gender}
            onDeletePlayer={handleDeletePlayer}
          />
        ))}
      </div>
      <button className="btn btn__create-player" onClick={handleOpenModal}>
        Create Player
      </button>

      {isModalOpen && (
        <PlayerModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          teams={teams}
          onCreatePlayer={handleCreatePlayer}
        />
      )}
    </div>
  );
}

export default TeamPage;

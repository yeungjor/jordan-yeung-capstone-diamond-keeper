import React, { useState } from "react";
import "./PlayerModal.scss";

function PlayerModal({ isOpen, onClose, teams, onCreatePlayer }) {
  const [playerName, setPlayerName] = useState("");
  const [jerseyNumber, setJerseyNumber] = useState("");
  const [gender, setGender] = useState("male");
  const [bats, setBats] = useState("right");
  const [throws, setThrows] = useState("right");
  const [team, setTeam] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlayer = {
      player_name: playerName,
      jersey_number: jerseyNumber,
      gender,
      bats,
      throws,
      team_id: team,
    };

    onCreatePlayer(newPlayer);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__container">
        <h2>Create Player</h2>
        <form onSubmit={handleSubmit}>
          <div className="modal__input modal__input--name">
            <label>Name</label>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              required
            />
          </div>
          <div className="modal__input modal__input--jersey">
            <label>Jersey Number</label>
            <input
              type="text"
              value={jerseyNumber}
              onChange={(e) => setJerseyNumber(e.target.value)}
              required
            />
          </div>
          <div className="modal__input modal__input--gender">
            <label>Gender</label>
            <div>
              <input
                type="radio"
                value="M"
                checked={gender === "M"}
                onChange={() => setGender("M")}
              />
              Male
              <input
                type="radio"
                value="F"
                checked={gender === "F"}
                onChange={() => setGender("F")}
              />
              Female
            </div>
          </div>
          <div className="modal__input modal__input--bats">
            <label>Bats</label>
            <div>
              <input
                type="radio"
                value="Left"
                checked={bats === "Left"}
                onChange={() => setBats("Left")}
              />
              Left
              <input
                type="radio"
                value="Right"
                checked={bats === "Right"}
                onChange={() => setBats("Right")}
              />
              Right
              <input
                type="radio"
                value="Switch"
                checked={bats === "Switch"}
                onChange={() => setBats("Switch")}
              />
              Switch
            </div>
          </div>
          <div className="modal__input modal__input--throws">
            <label>Throws</label>
            <div>
              <input
                type="radio"
                value="Left"
                checked={throws === "Left"}
                onChange={() => setThrows("Left")}
              />
              Left
              <input
                type="radio"
                value="Right"
                checked={throws === "Right"}
                onChange={() => setThrows("Right")}
              />
              Right
              <input
                type="radio"
                value="Switch"
                checked={throws === "Switch"}
                onChange={() => setThrows("Switch")}
              />
              Switch
            </div>
          </div>
          <div className="modal__input modal__input--team">
            <label>Team</label>
            <select
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              required
            >
              <option value="">Select Team</option>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.team_name}
                </option>
              ))}
            </select>
          </div>
          <div className="modal__button-container">
            <button type="submit">Create</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PlayerModal;

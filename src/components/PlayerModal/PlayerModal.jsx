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
        <h2 className="modal__header">Create Player</h2>
        <form onSubmit={handleSubmit}>
          <div className="modal__input modal__input-container">
            <label className="modal__input-label modal__input-label--name">
              Name
            </label>
            <input
              className="modal__input--name"
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              required
            />
          </div>
          <div className="modal__input modal__input-container">
            <label className="modal__input-label modal__input-label--jersey">
              Jersey Number
            </label>
            <input
              className="modal__input--jersey"
              type="text"
              value={jerseyNumber}
              onChange={(e) => setJerseyNumber(e.target.value)}
              min="0"
              max="99"
              required
            />
          </div>
          <div className="modal__input modal__input-container">
            <label className="modal__input-label">Gender</label>
            <div>
              <input
                className="modal__input-field--radio"
                type="radio"
                value="M"
                checked={gender === "M"}
                onChange={() => setGender("M")}
              />
              Male
              <input
                className="modal__input-field--radio"
                type="radio"
                value="F"
                checked={gender === "F"}
                onChange={() => setGender("F")}
              />
              Female
            </div>
          </div>
          <div className="modal__input modal__input-container">
            <label className="modal__input-label">Bats</label>
            <div>
              <input
                className="modal__input-field--radio"
                type="radio"
                value="Left"
                checked={bats === "Left"}
                onChange={() => setBats("Left")}
              />
              Left
              <input
                className="modal__input-field--radio"
                type="radio"
                value="Right"
                checked={bats === "Right"}
                onChange={() => setBats("Right")}
              />
              Right
              <input
                className="modal__input-field--radio"
                type="radio"
                value="Switch"
                checked={bats === "Switch"}
                onChange={() => setBats("Switch")}
              />
              Switch
            </div>
          </div>
          <div className="modal__input modal__input-container">
            <label className="modal__input-label">Throws</label>
            <div>
              <input
                className="modal__input-field--radio"
                type="radio"
                value="Left"
                checked={throws === "Left"}
                onChange={() => setThrows("Left")}
              />
              Left
              <input
                className="modal__input-field--radio"
                type="radio"
                value="Right"
                checked={throws === "Right"}
                onChange={() => setThrows("Right")}
              />
              Right
              <input
                className="modal__input-field--radio"
                type="radio"
                value="Switch"
                checked={throws === "Switch"}
                onChange={() => setThrows("Switch")}
              />
              Switch
            </div>
          </div>
          <div className="modal__input modal__input-container">
            <label className="modal__input-label modal__input-label--team">
              Team
            </label>
            <select
              className="modal__select"
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
            <button
              className="modal__button modal__button--cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="modal__button modal__button--create"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PlayerModal;

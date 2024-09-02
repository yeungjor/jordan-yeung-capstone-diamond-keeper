import "./HomePage.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

  const [teams, setTeams] = useState([]);
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [inningScores, setInningScores] = useState([]);
  const [totalHomeScore, setTotalHomeScore] = useState(0);
  const [totalAwayScore, setTotalAwayScore] = useState(0);
  const [gameDate, setGameDate] = useState("");

  async function fetchTeams() {
    try {
      const response = await axios.get(`${URL}/teams`);
      if (response.data.teams) {
        setTeams(response.data.teams);
      }
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  }

  useEffect(() => {
    fetchTeams();
  }, []);

  const handleAddInning = () => {
    setInningScores([...inningScores, { home: "", away: "" }]);
  };

  const handleScoreChange = (index, team, value) => {
    const newScores = [...inningScores];
    newScores[index][team] = parseInt(value, 10);
    setInningScores(newScores);
    calculateTotalScores(newScores);
  };

  const calculateTotalScores = (scores) => {
    let home = 0;
    let away = 0;

    scores.forEach((score) => {
      home += score.home;
      away += score.away;
    });

    setTotalHomeScore(home);
    setTotalAwayScore(away);
  };

  const handleSubmitGame = async () => {
    try {
      await axios.post(`${URL}/games`, {
        date: gameDate,
        home_team_id: homeTeam,
        away_team_id: awayTeam,
        home_team_runs: totalHomeScore,
        away_team_runs: totalAwayScore,
      });

      alert("Game created successfully");
    } catch (error) {
      console.error("Error submitting game", error.response.data);
      alert(
        "Ensure all fields are completed (date, home team, away team, and scores"
      );
    }
  };

  return (
    <>
      <div className="home">
        <h1 className="home__header">Game Score</h1>
        <input
          type="date"
          value={gameDate}
          onChange={(e) => setGameDate(e.target.value)}
        />
        <div className="scoreboard">
          <div>
            <select
              value={awayTeam}
              onChange={(e) => {
                console.log(e.target.value);
                return setAwayTeam(e.target.value);
              }}
            >
              <option value="">Select Away Team</option>
              {teams
                .filter((team) => team.id !== homeTeam)
                .map((team) => {
                  console.log(homeTeam);
                  // console.log(team.id);
                  return (
                    <option key={team.id} value={team.id}>
                      {team.team_name}
                    </option>
                  );
                })}
            </select>
            <div>
              <h2 className="scoreboard__score">{totalAwayScore}</h2>
              <h3>Away</h3>
            </div>
          </div>
          <div>
            <select
              value={homeTeam}
              onChange={(e) => setHomeTeam(e.target.value)}
            >
              <option value="">Select Home Team</option>
              {teams
                .filter((team) => team.id !== awayTeam)
                .map((team) => {
                  // console.log(team.id);
                  console.log(awayTeam);
                  return (
                    <option key={team.id} value={team.id}>
                      {team.team_name}
                    </option>
                  );
                })}
            </select>

            <div>
              <h2 className="scoreboard__score">{totalHomeScore}</h2>
              <h3>Home</h3>
            </div>
          </div>
        </div>
        {inningScores.map((inning, index) => (
          <div className="inning__container" key={index}>
            <input
              type="number"
              value={inning.away}
              onChange={(e) => handleScoreChange(index, "away", e.target.value)}
              placeholder="Away Team Score"
            />
            <input
              type="number"
              value={inning.home}
              onChange={(e) => handleScoreChange(index, "home", e.target.value)}
              placeholder="Home Team Score"
            />
          </div>
        ))}
        <div className="btn-container">
          <button className="btn btn__add-inning" onClick={handleAddInning}>
            Add Inning
          </button>
          <button className="btn btn__submit" onClick={handleSubmitGame}>
            Submit Game
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;

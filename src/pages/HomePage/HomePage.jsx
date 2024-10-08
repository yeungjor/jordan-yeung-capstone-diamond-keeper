import "./HomePage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import InningCard from "../../components/InningCard/InningCard";

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
    newScores[index][team] = Math.max(0, parseInt(value, 10));
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

      window.location.reload();
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
        <h1 className="home__header">Scoreboard</h1>
        <input
          className="home__date"
          type="date"
          value={gameDate}
          onChange={(e) => setGameDate(e.target.value)}
        />
        <div className="scoreboard">
          <div>
            <div>
              <h2 className="scoreboard__score">{totalAwayScore}</h2>
              <h3>Away</h3>
            </div>
            <select
              className="scoreboard__select"
              value={awayTeam}
              onChange={(e) => {
                return setAwayTeam(e.target.value);
              }}
            >
              <option value="">Select Away Team</option>
              {teams
                .filter((team) => team.id !== parseInt(homeTeam))
                .map((team) => {
                  return (
                    <option key={team.id} value={team.id}>
                      {team.team_name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div>
            <div>
              <h2 className="scoreboard__score">{totalHomeScore}</h2>
              <h3>Home</h3>
            </div>
            <select
              className="scoreboard__select"
              value={homeTeam}
              onChange={(e) => setHomeTeam(e.target.value)}
            >
              <option value="">Select Home Team</option>
              {teams
                .filter((team) => team.id !== parseInt(awayTeam))
                .map((team) => (
                  <option key={team.id} value={team.id}>
                    {team.team_name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <section className="inning-section">
          <p className="inning-header">Innings</p>
          <div>
            <div className="inning-container">
              {inningScores.map((inning, index) => (
                <InningCard
                  key={index}
                  inning={inning}
                  index={index}
                  handleScoreChange={handleScoreChange}
                />
              ))}
            </div>
          </div>
        </section>
        <div className="btn__container">
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

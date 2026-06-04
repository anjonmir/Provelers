import { Container } from "react-bootstrap";

import TopTraveler from "./TopTraveler";
import RankCard from "./RankCard";
import AchievementGrid from "./AchievementGrid";

import "./leaderboard.css";

function LeaderboardTable() {
  const users = [
    {
      rank: 1,
      name: "Anjon Mir",
      points: 4820,
    },
    {
      rank: 2,
      name: "Sadia Islam",
      points: 4510,
    },
    {
      rank: 3,
      name: "Traveler Rahim",
      points: 4300,
    },
    {
      rank: 4,
      name: "Nafis Ahmed",
      points: 3980,
    },
    {
      rank: 5,
      name: "Mitu Akter",
      points: 3720,
    },
  ];

  return (
    <section className="leaderboard-section">
      <Container>

        <div className="leaderboard-header">
          <h1>
            Traveler Leaderboard
          </h1>

          <p>
            Top explorers across
            Bangladesh.
          </p>
        </div>

        <TopTraveler />

        <AchievementGrid />

        <div className="leaderboard-list">
          {users.map((user) => (
            <RankCard
              key={user.rank}
              rank={user.rank}
              name={user.name}
              points={user.points}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}

export default LeaderboardTable;
import { Container } from "react-bootstrap";

import RankCard from "./RankCard";
import TopTraveler from "./TopTraveler";

import "./leaderboard.css";

function LeaderboardTable() {
  const users = [
    {
      rank: 1,
      name: "Anjon Mir",
      points: 4850,
    },

    {
      rank: 2,
      name: "Traveler Rahim",
      points: 4320,
    },

    {
      rank: 3,
      name: "Nafis Ahmed",
      points: 3980,
    },

    {
      rank: 4,
      name: "Sadia Islam",
      points: 3750,
    },
  ];

  return (
    <section className="leaderboard-section">
      <Container>
        <div className="leaderboard-header">
          <h1>Traveler Leaderboard</h1>

          <p>
            Top explorers across Bangladesh.
          </p>
        </div>

        <TopTraveler />

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
type Props = {
  rank: number;
  name: string;
  points: number;
};

function RankCard({
  rank,
  name,
  points,
}: Props) {
  return (
    <div className="rank-card">
      <div className="rank-number">
        #{rank}
      </div>

      <div>
        <h5>{name}</h5>

        <span>
          {points} Points
        </span>
      </div>
    </div>
  );
}

export default RankCard;
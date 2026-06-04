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

      <div>
        <strong>
          #{rank}
        </strong>
      </div>

      <div>
        {name}
      </div>

      <div>
        {points} pts
      </div>

    </div>
  );
}

export default RankCard;
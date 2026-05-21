type Props = {
  title: string;
  icon: string;
};

function AchievementBadge({
  title,
  icon,
}: Props) {
  return (
    <div className="achievement-badge">
      <div className="badge-icon">
        {icon}
      </div>

      <h6>{title}</h6>
    </div>
  );
}

export default AchievementBadge;
import "./profile.css";

function PointsHistory() {
  return (
    <div className="profile-card">

      <h2>
        Points History
      </h2>

      <div className="points-list">

        <div>
          <span>
            Published Trip
          </span>

          <strong>
            +40
          </strong>
        </div>

        <div>
          <span>
            Added Place
          </span>

          <strong>
            +30
          </strong>
        </div>

        <div>
          <span>
            Answered Question
          </span>

          <strong>
            +20
          </strong>
        </div>

        <div>
          <span>
            Asked Question
          </span>

          <strong>
            +10
          </strong>
        </div>

      </div>

    </div>
  );
}

export default PointsHistory;
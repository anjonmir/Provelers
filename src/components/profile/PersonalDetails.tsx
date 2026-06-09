import "./profile.css";

function PersonalDetails() {
  return (
    <div className="profile-card">

      <h2>Personal Details</h2>

      <div className="details-grid">

        <div>
          <strong>
            Lives In
          </strong>

          <p>
            Rajshahi
          </p>
        </div>

        <div>
          <strong>
            Hometown
          </strong>

          <p>
            Rajshahi
          </p>
        </div>

        <div>
          <strong>
            Workplace
          </strong>

          <p>
            Provelers
          </p>
        </div>

        <div>
          <strong>
            Blood Group
          </strong>

          <p>
            O+
          </p>
        </div>

        <div>
          <strong>
            NID
          </strong>

          <p>
            1234567891234
          </p>
        </div>


      </div>

    </div>
  );
}

export default PersonalDetails;
import { useContext } from "react";

import { UserContext } from "../../context/UserContext";

import "./profile.css";

function PersonalDetails() {

  const { profile } =
    useContext(UserContext);

  const user =
    profile?.user;

  return (

    <div className="profile-card">

      <h2>

        Personal Details

      </h2>

      <div className="details-grid">

        <div>

          <strong>Lives In</strong>

          <p>

            {user?.district},
            {" "}
            {user?.division}

          </p>

        </div>

        <div>

          <strong>Hometown</strong>

          <p>

            {user?.homeTown || "-"}

          </p>

        </div>

        <div>

          <strong>Occupation</strong>

          <p>

            {user?.occupation || "-"}

          </p>

        </div>

        <div>

          <strong>University</strong>

          <p>

            {user?.university || "-"}

          </p>

        </div>

        <div>

          <strong>Blood Group</strong>

          <p>

            {user?.bloodGroup || "-"}

          </p>

        </div>

        <div>

          <strong>Date of Birth</strong>

          <p>

            {user?.dateOfBirth || "-"}

          </p>

        </div>

        <div>

          <strong>Traveler Type</strong>

          <p>

            {user?.travelerType || "-"}

          </p>

        </div>

        <div>

          <strong>Email</strong>

          <p>

            {user?.email || "-"}

          </p>

        </div>

      </div>

    </div>

  );

}

export default PersonalDetails;
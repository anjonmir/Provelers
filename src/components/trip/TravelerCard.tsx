import { useNavigate } from "react-router-dom";

import "./trip.css";

type Props = {
    trip: any;
    profile: any;
};

function TravelerCard({
    trip,
    profile,
}: Props) {

    const navigate = useNavigate();

    const user = profile?.user;


    return (

        <div className="traveler-card glass-card">

            <img
                src={
                    user?.photoURL ||
                    "/images/default-avatar.png"
                }
                alt=""
                className="traveler-avatar"
            />

            <h3>
                {user?.fullName}
            </h3>
            <p className="traveler-username">
                @{user?.username}
            </p>

            <div className="traveler-meta">
                <p>

                    👥 {user?.followers?.length || 0} Followers

                </p>

                <p>

                    📍 {trip.destination}

                </p>

                <p>

                    🗓 {trip.days.length} Days

                </p>

                <p>

                    Published Trip

                </p>



            </div>

            <button
                className="primary-btn traveler-profile-btn"
                onClick={() =>
                    navigate(
                        `/profile/${trip.ownerUid}`
                    )
                }
            >
                View Full Profile
            </button>

        </div>

    );

}

export default TravelerCard;
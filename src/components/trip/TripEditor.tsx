import DayCard from "./DayCard";

import "./trip.css";

type Props = {

    trip: any;

    isOwner: boolean;

    onAddDay: () => void;

    onAddStop: any;

    onDeleteStop: any;

    onEditStop: any;

}

function TripEditor({
    trip,
    isOwner,
    onAddDay,
    onAddStop,
    onDeleteStop,
    onEditStop,
}: Props) {
    console.log(
        trip.days.map((day: any) => ({
            title: day.title,
            id: day._id ?? day.id,
        }))
    );
    return (
        <div className="trip-editor glass-card">

            <div className="trip-hero">

                <img
                    src={
                        trip.coverImage ||
                        "/images/default-cover.jpg"
                    }
                    alt=""
                    className="trip-hero-image"
                />

                <div className="trip-hero-overlay">

                    <div className="trip-hero-content">

                        <div>

                            <h1>{trip.title}</h1>

                            <p>
                                {trip.category}
                                {" • "}
                                {trip.privacy}
                                {" • "}
                                {trip.location}
                            </p>

                        </div>

                        {/* <button
                            className="trip-hero-btn"
                            onClick={onAddDay}
                        >
                            + Day
                        </button> */}

                    </div>

                </div>

            </div>

            <div className="trip-editor-header">

                {isOwner && (

                    <button
                        className="primary-btn"
                        onClick={onAddDay}
                    >
                        + Add Day
                    </button>

                )}

            </div>

            {trip.days.map(
                (day: any) => (
                    <DayCard
                        key={day._id}
                        day={day}
                        isOwner={isOwner}
                        onAddStop={onAddStop}
                        onDeleteStop={onDeleteStop}
                        onEditStop={onEditStop}
                    />
                )
            )}

        </div>
    );
}

export default TripEditor;
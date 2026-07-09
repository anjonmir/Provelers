import DayCard from "./DayCard";

import "./trip.css";

type Props = {
    trip: any;

    onAddDay: () => void;

    onAddStop: (
        dayId: string,
        stop: any
    ) => void;

    onDeleteStop: (
        dayId: string,
        stopId: string
    ) => void;

    onEditStop: (
        dayId: string,
        stop: any
    ) => void;
};

function TripEditor({
    trip,
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

                <button
                    className="primary-btn"
                    onClick={onAddDay}
                >
                    + Add Day
                </button>

            </div>

            {trip.days.map(
                (day: any) => (
                    <DayCard
                        key={day._id}
                        day={day}
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
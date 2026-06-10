import DayCard from "./DayCard";

import "./trip.css";

type Props = {
    trip: any;

    onAddDay: () => void;

    onAddStop: (
        dayId: number,
        stop: any
    ) => void;

    onDeleteStop: (
        dayId: number,
        stopId: number
    ) => void;

    onEditStop: (
        dayId: number,
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
    return (
        <div className="trip-editor glass-card">

            <div className="trip-editor-header">

                <h2>{trip.title}</h2>

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
                        key={day.id}
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
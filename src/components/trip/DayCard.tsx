import StopCard from "./StopCard";
import { FaPlusCircle } from "react-icons/fa";
import "./trip.css";
import { useState } from "react";
import AddStopModal from "./AddStopModal";

type Props = {
    day: any;

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

function DayCard({
    day,
    onAddStop,
    onDeleteStop,
    onEditStop,
}: Props) {
    const [showModal, setShowModal] =
        useState(false);
    const [editingStop,
        setEditingStop] =
        useState<any>(null);
    return (

        <div className="day-card">

            <div className="day-header">

                <h3>{day.title}</h3>

                <button
                    className="trip-icon-btn"
                    onClick={() =>
                        setShowModal(true)
                    }
                >
                    <FaPlusCircle />
                </button>

            </div>

            {day.stops.map(
                (stop: any) => (
                    <StopCard
                        key={stop.id}
                        stop={stop}
                        onDelete={(stopId) =>
                            onDeleteStop(
                                day.id,
                                stopId
                            )
                        }
                        onEdit={(stop) => {
                            setEditingStop(stop);

                            setShowModal(true);
                        }}
                    />
                )
            )}

            <AddStopModal
                isOpen={showModal}
                editingStop={
                    editingStop
                }
                onClose={() => {
                    setShowModal(false);

                    setEditingStop(null);
                }}
                onSave={(stop) => {
                    if (editingStop) {
                        onEditStop(
                            day.id,
                            stop
                        );
                    } else {
                        onAddStop(
                            day.id,
                            stop
                        );
                    }

                    setShowModal(false);

                    setEditingStop(null);
                }}
            />
        </div>
    );
}

export default DayCard;
import {
    useEffect,
    useRef,
} from "react";
import "./trip.css";

import {
    FaEdit,
    FaTrash,
} from "react-icons/fa";

type Props = {

    stop: any;

    active?: boolean;

    isOwner: boolean;

    onDelete: (
        stopId: string
    ) => void;

    onEdit: (
        stop: any
    ) => void;

};

function StopCard({

    stop,

    active,

    isOwner,

    onDelete,

    onEdit,

}: Props) {
    const cardRef =
        useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (active) {

            cardRef.current?.scrollIntoView({

                behavior: "smooth",

                block: "center",

            });

        }

    }, [active]);
    return (
        <div
            ref={cardRef}
            className={`stop-card ${active ? "active-stop" : ""
                }`}
        >

            <div className="stop-header">

                <h5>{stop.title}</h5>

                <span>{stop.time}</span>

            </div>

            <p className="stop-location">
                📍 {stop.location}
            </p>

            <p className="stop-description">
                {stop.description}
            </p>
            {stop.media?.length > 0 && (
                <div className="stop-media-preview">

                    {stop.media.map(
                        (
                            image: string,
                            index: number
                        ) => (
                            <img
                                key={index}
                                src={image}
                                alt=""
                                className="stop-media-image"
                            />
                        )
                    )}

                </div>
            )}

            {isOwner && (

                <div className="stop-actions">


                    <button
                        className="trip-icon-btn"
                        onClick={() =>
                            onEdit(stop)
                        }
                    >
                        <FaEdit />
                    </button>

                    <button
                        className="trip-icon-btn danger"
                        onClick={() =>
                            onDelete(stop._id)
                        }
                    >
                        <FaTrash />
                    </button>

                </div>
            )}

        </div>
    );
}

export default StopCard;
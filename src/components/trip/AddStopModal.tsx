import {
    useState,
    useEffect,
} from "react";
import {
    FaInfoCircle,
    FaMapMarkerAlt,
} from "react-icons/fa";

import { mockPlaces } from "../../data/mockPlaces";

import { mockHiddenGemQueue }
    from "../../data/mockHiddenGemQueue";


type Props = {
    isOpen: boolean;

    onClose: () => void;

    onSave: (stop: any) => void;

    editingStop?: any;
};

function AddStopModal({
    isOpen,
    onClose,
    onSave,
    editingStop,
}: Props) {
    const [activeTab, setActiveTab] =
        useState("details");

    const [title, setTitle] =
        useState("");

    const [time, setTime] =
        useState("");

    const [description, setDescription] =
        useState("");

    const [locationName, setLocationName] =
        useState("");

    const [search, setSearch] =
        useState("");

    const [showHiddenGem, setShowHiddenGem] =
        useState(false);

    const [hiddenGemName, setHiddenGemName] =
        useState("");

    const [hiddenGemDescription,
        setHiddenGemDescription] =
        useState("");

    const handleSave = () => {
        if (!title.trim()) return;

        const newStop = {
            id:
                editingStop?.id ??
                Date.now(),

            title,

            time,

            description,

            location:
                locationName,

            lat: null,

            lng: null,

            source:
                showHiddenGem
                    ? "user-pin"
                    : "database",

            reviewStatus:
                showHiddenGem
                    ? "pending"
                    : "approved",

            media: [],
        };
        useEffect(() => {
            if (!editingStop) return;

            setTitle(
                editingStop.title || ""
            );

            setTime(
                editingStop.time || ""
            );

            setDescription(
                editingStop.description || ""
            );

            setLocationName(
                editingStop.location || ""
            );
        }, [editingStop]);



        if (showHiddenGem) {
            mockHiddenGemQueue.push({
                id: Date.now(),

                name:
                    hiddenGemName,

                description:
                    hiddenGemDescription,

                reviewStatus:
                    "pending",

                lat: null,

                lng: null,
            });
        }
        onSave(newStop);

        setTitle("");
        setTime("");
        setDescription("");
        setLocationName("");

        setActiveTab("details");

        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="trip-modal-overlay">

            <div className="trip-modal">

                <div className="trip-modal-header">

                    <h3>Add Stop</h3>

                    <button
                        className="trip-modal-close"
                        onClick={onClose}
                    >
                        ✕
                    </button>

                </div>

                <div className="stop-tabs">

                    <button
                        className={
                            activeTab === "details"
                                ? "active-tab"
                                : ""
                        }
                        onClick={() =>
                            setActiveTab(
                                "details"
                            )
                        }
                    >
                        <FaInfoCircle />
                        Details
                    </button>

                    <button
                        className={
                            activeTab === "location"
                                ? "active-tab"
                                : ""
                        }
                        onClick={() =>
                            setActiveTab(
                                "location"
                            )
                        }
                    >
                        <FaMapMarkerAlt />
                        Location
                    </button>

                </div>

                {activeTab ===
                    "details" && (
                        <div className="trip-modal-body">

                            <div className="trip-form-group full-width">

                                <label>
                                    Stop Name
                                </label>

                                <input
                                    value={title}
                                    onChange={(e) =>
                                        setTitle(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                            <div className="trip-form-group full-width">

                                <label>
                                    Time
                                </label>

                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) =>
                                        setTime(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                            <div className="trip-form-group full-width">

                                <label>
                                    Description
                                </label>

                                <textarea
                                    value={
                                        description
                                    }
                                    onChange={(e) =>
                                        setDescription(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                            <div className="trip-form-group full-width">

                                <label>
                                    Media
                                </label>

                                <input
                                    type="file"
                                    multiple
                                />

                            </div>

                        </div>
                    )}

                {activeTab ===
                    "location" && (
                        <div className="trip-modal-body">

                            <div className="trip-form-group full-width">

                                <label>
                                    Search Existing Place
                                </label>

                                <input
                                    placeholder="Search place..."
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(
                                            e.target.value
                                        )
                                    }
                                />

                                <div className="place-results">

                                    {mockPlaces
                                        .filter((place) => {
                                            if (!search.trim()) {
                                                return true;
                                            }

                                            return place.name
                                                .toLowerCase()
                                                .includes(
                                                    search.toLowerCase()
                                                );
                                        })
                                        .slice(
                                            0,
                                            search.trim() ? 2 : 2
                                        )
                                        .map((place) => (
                                            <button
                                                key={place.id}
                                                className="place-result"
                                                onClick={() => {
                                                    setLocationName(
                                                        place.name
                                                    );

                                                    setSearch(
                                                        place.name
                                                    );
                                                }}
                                            >
                                                📍 {place.name}
                                            </button>
                                        ))}

                                </div>

                            </div>

                            <div className="trip-form-group full-width">

                                <label>
                                    Hidden Gem
                                </label>

                                <button
                                    className="secondary-btn"
                                    onClick={() =>
                                        setShowHiddenGem(
                                            !showHiddenGem
                                        )
                                    }
                                >
                                    + Create Hidden Gem
                                </button>

                                {showHiddenGem && (
                                    <div className="hidden-gem-form">

                                        <input
                                            placeholder="Hidden Gem Name"
                                            value={hiddenGemName}
                                            onChange={(e) =>
                                                setHiddenGemName(
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <textarea
                                            placeholder="Description"
                                            value={
                                                hiddenGemDescription
                                            }
                                            onChange={(e) =>
                                                setHiddenGemDescription(
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <button
                                            className="secondary-btn"
                                            onClick={() =>
                                                alert(
                                                    "Map pinning will be connected here."
                                                )
                                            }
                                        >
                                            📍 Pin Location
                                        </button>

                                    </div>
                                )}

                            </div>

                        </div>
                    )}

                <div className="trip-actions">

                    <button
                        className="secondary-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="primary-btn"
                        onClick={handleSave}
                    >
                        Save Stop
                    </button>

                </div>

            </div>

        </div>
    );
}

export default AddStopModal;
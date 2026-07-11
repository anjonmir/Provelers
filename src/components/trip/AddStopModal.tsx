import {
    useState,
    useEffect,
} from "react";
import { createPortal } from "react-dom";

import useAuth from "../../hooks/useAuth";

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
    const { user } = useAuth();
    const [activeTab, setActiveTab] =
        useState("details");

    const [title, setTitle] =
        useState("");

    const [arrivalTime, setArrivalTime] =
        useState("");

    const [description, setDescription] =
        useState("");

    const [locationName, setLocationName] =
        useState("");

    const [search, setSearch] =
        useState("");

    const [hiddenGemName, setHiddenGemName] =
        useState("");

    const [hiddenGemDescription,
        setHiddenGemDescription] =
        useState("");

    const [media, setMedia] =
        useState<string[]>([]);

    const [latitude,
        setLatitude] =
        useState<number | null>(null);

    const [longitude,
        setLongitude] =
        useState<number | null>(null);

    const [stopType,
        setStopType] =
        useState<
            "existing" |
            "hiddenGem"
        >("existing");
    useEffect(() => {
        if (!editingStop) return;

        setTitle(
            editingStop.title || ""
        );

        setArrivalTime(
            editingStop.arrivalTime || ""
        );

        setDescription(
            editingStop.description || ""
        );

        setLocationName(
            editingStop.location || ""
        );
    }, [editingStop]);


    const handleSave = () => {

        if (!title.trim()) {
            alert(
                "Please enter stop name."
            );

            return;
        }

        const finalLocation =

            stopType === "hiddenGem"
                ? hiddenGemName
                : locationName;

        if (!finalLocation.trim()) {

            alert(
                "Please select a location."
            );

            return;
        }

        const newStop = {

            ...(editingStop?._id && {
                _id: editingStop._id,
            }),

            placeId: "",

            placeName: finalLocation,

            title,

            description,

            location: finalLocation,

            latitude:
                stopType === "hiddenGem"
                    ? latitude
                    : null,

            longitude:
                stopType === "hiddenGem"
                    ? longitude
                    : null,

            arrivalTime,

            media,

            expenses: 0,

            source:
                stopType === "hiddenGem"
                    ? "user-pin"
                    : "database",

            reviewStatus:
                stopType === "hiddenGem"
                    ? "pending"
                    : "approved",

            published: false,

            likes: 0,

            likedBy: [],

            comments: [],

        };

        if (stopType === "hiddenGem") {

            mockHiddenGemQueue.push({
                id: Date.now(),

                name: hiddenGemName,

                location: hiddenGemName,

                postalAddress: hiddenGemName,

                category: "Hidden Gem",

                image: "/images/default-cover.jpg",

                description: hiddenGemDescription,

                rating: 0,

                reviews: 0,

                savedCount: 0,

                latitude,

                longitude,

                hiddenGem: true,

                createdBy: user?.displayName || "Anonymous",

                reviewStatus: "pending",
            });

            alert(
                "🎉 Hidden Gem Submitted!"
            );

        }

        onSave(newStop);

        setTitle("");
        setArrivalTime("");
        setDescription("");
        setLocationName("");
        setHiddenGemName("");
        setHiddenGemDescription("");

        setActiveTab("details");

        onClose();

    };

    if (!isOpen) return null;

    return createPortal(

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
                                    value={arrivalTime}

                                    onChange={(e) =>
                                        setArrivalTime(e.target.value)
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
                                    accept="image/*"
                                    onChange={(e) => {
                                        const files =
                                            Array.from(
                                                e.target.files || []
                                            );

                                        const previews =
                                            files.map((file) =>
                                                URL.createObjectURL(
                                                    file
                                                )
                                            );

                                        setMedia(previews);
                                    }}
                                />
                                {media.length > 0 && (
                                    <div className="media-preview-grid">

                                        {media.map(
                                            (
                                                image: string,
                                                index: number
                                            ) => (
                                                <img
                                                    key={index}
                                                    src={image}
                                                    alt=""
                                                    className="media-preview"
                                                />
                                            )
                                        )}

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
                                        onClick={() =>
                                            setActiveTab(
                                                "location"
                                            )
                                        }
                                    >
                                        Next
                                    </button>

                                </div>

                            </div>

                        </div>
                    )}

                {activeTab ===
                    "location" && (
                        <div className="trip-modal-body">

                            <div className="trip-form-group full-width">
                                <div className="stop-type-selector">

                                    <button
                                        className={
                                            stopType === "existing"
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() =>
                                            setStopType(
                                                "existing"
                                            )
                                        }
                                    >
                                        Existing Place
                                    </button>

                                    <button
                                        className={
                                            stopType === "hiddenGem"
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() =>
                                            setStopType(
                                                "hiddenGem"
                                            )
                                        }
                                    >
                                        Hidden Gem
                                    </button>

                                </div>

                                {stopType === "existing" && (
                                    <>
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
                                    </>
                                )}

                            </div>

                            <div className="trip-form-group full-width">



                                {stopType === "hiddenGem" && (

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
                                            onClick={() => {

                                                navigator.geolocation.getCurrentPosition(

                                                    (position) => {

                                                        setLatitude(
                                                            position.coords.latitude
                                                        );

                                                        setLongitude(
                                                            position.coords.longitude
                                                        );

                                                        alert(
                                                            "Current location saved."
                                                        );

                                                    },

                                                    (error) => {

                                                        alert(
                                                            error.message
                                                        );

                                                    }

                                                );

                                            }}
                                        >
                                            📍 Use Current Location
                                        </button>

                                    </div>

                                )}
                                <div className="trip-actions">

                                    <button
                                        className="secondary-btn"
                                        onClick={() =>
                                            setActiveTab(
                                                "details"
                                            )
                                        }
                                    >
                                        Back
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
                    )}


            </div>

        </div>,
        document.body
    );
}

export default AddStopModal;
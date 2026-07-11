import { useState } from "react";

import Map, { Marker } from "react-map-gl/mapbox";

import "mapbox-gl/dist/mapbox-gl.css";


import "./map.css";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSave: (gem: any) => void;
};

function HiddenGemModal({
    isOpen,
    onClose,
    onSave,
}: Props) {

    const [name, setName] =
        useState("");

    const [description, setDescription] =
        useState("");

    const [category, setCategory] =
        useState("Hidden Gem");

    const [image, setImage] =
        useState("");

    const [lat, setLat] =
        useState<number | null>(null);

    const [lng, setLng] =
        useState<number | null>(null);

    const categories = [
        "Forest",
        "Lake",
        "River",
        "Hill",
        "Waterfall",
        "Island",
        "View Point",
        "Cave",
        "Hidden Gem",
    ];

    if (!isOpen) return null;

    return (

        <div className="hidden-gem-overlay">

            <div className="hidden-gem-modal map-style-popup">

                <button
                    className="modal-close-btn"
                    onClick={onClose}
                >
                    ✕
                </button>

                <h2>
                    💎 Submit Hidden Gem
                </h2>

                <p className="hidden-gem-note">

                    Help other travelers discover amazing places.

                    Your submission will be reviewed before becoming public.

                </p>
                <div className="hidden-map-preview">

                    <Map
                        initialViewState={{
                            longitude: lng || 90.4125,
                            latitude: lat || 23.8103,
                            zoom: lat ? 14 : 6,
                        }}
                        mapboxAccessToken={
                            import.meta.env.VITE_MAPBOX_TOKEN
                        }
                        mapStyle="mapbox://styles/mapbox/navigation-day-v1"
                    >

                        {lat && lng && (

                            <Marker
                                longitude={lng}
                                latitude={lat}
                            >

                                <div className="hidden-gem-marker" />

                            </Marker>

                        )}

                    </Map>

                </div>

                <p>
                    Help the community discover
                    a new place.
                </p>

                <input
                    placeholder="Place Name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />

                <div className="hidden-gem-categories">

                    {categories.map((item) => (

                        <button
                            key={item}
                            type="button"
                            className={
                                category === item
                                    ? "category-card active"
                                    : "category-card"
                            }
                            onClick={() =>
                                setCategory(item)
                            }
                        >
                            {item}
                        </button>

                    ))}

                </div>

                <button
                    className="secondary-btn"
                    onClick={() => {

                        navigator.geolocation.getCurrentPosition(

                            (position) => {

                                setLat(position.coords.latitude);

                                setLng(position.coords.longitude);

                                setTimeout(() => {

                                    alert("Location selected.");

                                }, 200);

                            },

                            (err) =>
                                alert(err.message)

                        );

                    }}
                >
                    📍 Use Current Location
                </button>

                <label className="hidden-gem-upload">

                    <input
                        hidden
                        type="file"
                        accept="image/*"
                        onChange={(e) => {

                            const file =
                                e.target.files?.[0];

                            if (!file) return;

                            setImage(
                                URL.createObjectURL(file)
                            );

                        }}
                    />

                    {image ? (

                        <img
                            src={image}
                            className="hidden-gem-preview"
                        />

                    ) : (

                        <>
                            📸
                            <br />
                            Upload Cover Photo
                        </>

                    )}

                </label>



                <div className="trip-actions">

                    <button
                        className="secondary-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="primary-btn"
                        onClick={() => {

                            if (!name.trim()) {

                                alert("Enter place name.");

                                return;

                            }

                            onSave({

                                id: Date.now(),

                                name,

                                description,

                                location: name,

                                postalAddress: name,

                                category,

                                image,

                                rating: 0,

                                reviews: 0,

                                savedCount: 0,

                                lat,

                                lng,

                                hiddenGem: true,

                                reviewStatus: "pending",

                                createdBy: "Current User",

                            });

                        }}
                    >
                        Submit Hidden Gem
                    </button>

                </div>

            </div>

        </div>

    );

}

export default HiddenGemModal;
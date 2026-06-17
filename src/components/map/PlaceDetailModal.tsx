import { useState } from "react";

import { mockTrips }
  from "../../data/mockTrips";

import "./map.css";

import {
  mockSavedPlaces,
} from "../../data/mockSavedPlaces";


type Props = {
  isOpen: boolean;
  onClose: () => void;
  place: any;
};

function PlaceDetailModal({
  isOpen,
  onClose,
  place,
}: Props) {

  const [selectedTripId,
    setSelectedTripId] =
    useState("");

  const [selectedDayId,
    setSelectedDayId] =
    useState("");

  if (!isOpen || !place)
    return null;

  return (
    <div className="place-modal-overlay">

      <div className="place-modal">

        <button
          className="modal-close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={place.image}
          alt={place.name}
          className="modal-image"
        />

        <div className="modal-content">

          <h2>
            {place.name}
          </h2>

          <p className="modal-location">
            📍 {place.location}
          </p>

          <div className="modal-category">
            {place.category}
          </div>

          <p className="modal-description">
            {place.description}
          </p>
          <div className="trip-link-section">

            <label>
              Select Trip
            </label>

            <select
              value={selectedTripId}
              onChange={(e) =>
                setSelectedTripId(
                  e.target.value
                )
              }
            >

              <option value="">
                Choose Trip
              </option>

              {mockTrips.map(
                (trip) => (
                  <option
                    key={trip.id}
                    value={trip.id}
                  >
                    {trip.title}
                  </option>
                )
              )}

            </select>

            {selectedTripId && (

              <>

                <label>
                  Select Day
                </label>

                <select
                  value={selectedDayId}
                  onChange={(e) =>
                    setSelectedDayId(
                      e.target.value
                    )
                  }
                >

                  <option value="">
                    Choose Day
                  </option>

                  {mockTrips
                    .find(
                      (trip) =>
                        trip.id ===
                        Number(
                          selectedTripId
                        )
                    )
                    ?.days.map(
                      (day) => (
                        <option
                          key={day.id}
                          value={day.id}
                        >
                          {day.title}
                        </option>
                      )
                    )}

                </select>

              </>

            )}

          </div>

          <div className="modal-actions">

            <button
              className="primary-btn"
              onClick={() => {

                const exists =
                  mockSavedPlaces.some(
                    (saved) =>
                      saved.name ===
                      place.name
                  );

                if (exists) {

                  alert(
                    "Already saved."
                  );

                  return;
                }

                mockSavedPlaces.push(
                  place
                );

                alert(
                  "Place saved successfully!"
                );

              }}
            >
              Save Place
            </button>

            <button
              className="secondary-btn"
              onClick={() => {

                if (
                  !selectedTripId ||
                  !selectedDayId
                ) {
                  alert(
                    "Select trip and day."
                  );

                  return;
                }

                const trip =
                  mockTrips.find(
                    (trip) =>
                      trip.id ===
                      Number(
                        selectedTripId
                      )
                  );

                const day =
                  trip?.days.find(
                    (day) =>
                      day.id ===
                      Number(
                        selectedDayId
                      )
                  );

                const alreadyExists =
                  day?.stops.some(
                    (stop) =>
                      stop.title ===
                      place.name
                  );

                if (
                  alreadyExists
                ) {
                  alert(
                    "This place already exists in this day."
                  );

                  return;
                }

                day?.stops.push({
                  id: Date.now(),

                  title:
                    place.name,

                  location:
                    place.location,

                  time:
                    "09:00",

                  description:
                    place.description,

                  media: [],
                });

                alert(
                  "Place added successfully!"
                );

                onClose();

              }}
            >
              Add To Trip
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PlaceDetailModal;
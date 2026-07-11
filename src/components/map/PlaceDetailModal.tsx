import { useEffect, useState } from "react";

import {
  getTrips,
  updateTrip,
} from "../../services/tripService";

import useAuth
  from "../../hooks/useAuth";

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
  const { user } = useAuth();

  const [trips, setTrips] =
    useState<any[]>([]);

  const [showTripSelector, setShowTripSelector] = useState(false);

  useEffect(() => {

    if (!user) return;

    loadTrips();

  }, [user]);

  if (!isOpen || !place)
    return null;


  async function loadTrips() {

    try {

      const data =
        await getTrips(user!.uid);

      setTrips(data);

    } catch (err) {

      console.error(err);

    }

  }

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

            {showTripSelector && (

              <div className="trip-link-section">

                <label>Select Trip</label>

                <select
                  value={selectedTripId}
                  onChange={(e) =>
                    setSelectedTripId(e.target.value)
                  }
                >

                  <option value="">
                    Choose Trip
                  </option>

                  {trips.map((trip) => (

                    <option
                      key={trip._id}
                      value={trip._id}
                    >
                      {trip.title}
                    </option>

                  ))}

                </select>

                {selectedTripId && (

                  <>

                    <label>Select Day</label>

                    <select
                      value={selectedDayId}
                      onChange={(e) =>
                        setSelectedDayId(e.target.value)
                      }
                    >

                      <option value="">
                        Choose Day
                      </option>

                      {trips
                        .find(
                          trip =>
                            trip._id === selectedTripId
                        )
                        ?.days.map((day: any) => (

                          <option
                            key={day._id}
                            value={day._id}
                          >
                            {day.title}
                          </option>

                        ))}

                    </select>

                    <button
                      className="primary-btn"
                      style={{ marginTop: "15px" }}
                      onClick={async () => {

                        if (
                          !selectedTripId ||
                          !selectedDayId
                        ) {
                          alert("Select trip and day.");
                          return;
                        }

                        const trip = trips.find(
                          trip =>
                            trip._id === selectedTripId
                        );

                        if (!trip) return;

                        const updatedTrip = {

                          ...trip,

                          days: trip.days.map((day: any) => {

                            if (
                              day._id !== selectedDayId
                            )
                              return day;

                            if (
                              day.stops.some(
                                (stop: any) =>
                                  stop.placeName ===
                                  place.name
                              )
                            ) {
                              alert(
                                "Already exists."
                              );

                              return day;
                            }

                            return {

                              ...day,

                              stops: [

                                ...day.stops,

                                {

                                  placeId: place.id,

                                  placeName: place.name,

                                  title: place.name,

                                  location: place.location,

                                  latitude: place.lat,

                                  longitude: place.lng,

                                  arrivalTime: "09:00",

                                  description:
                                    place.description,

                                  media: place.image
                                    ? [place.image]
                                    : [],

                                  source: "database",

                                },

                              ],

                            };

                          }),

                        };

                        await updateTrip(
                          trip._id,
                          updatedTrip
                        );

                        setSelectedTripId("");
                        setSelectedDayId("");
                        setShowTripSelector(false);

                        alert("Added to Trip!");

                        onClose();

                        loadTrips();

                      }}
                    >

                      Confirm Add

                    </button>

                  </>

                )}

              </div>

            )}

            <button
              className="secondary-btn"
              onClick={() =>
                setShowTripSelector(true)
              }
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
import { useState } from "react";

import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import TripSidebar from "./TripSidebar";
import TripCreateModal from "./TripCreateModal";
import TripStats from "./TripStats";
import MiniMapPreview from "./MiniMapPreview";

import TripEditor from "./TripEditor";

import { mockTrips } from "../../data/mockTrips";
import { mockFeed }
  from "../../data/mockFeed";

import "./trip.css";

function TripPlanner() {
  const [showModal, setShowModal] =
    useState(false);

  const [trips, setTrips] =
    useState(mockTrips);

  const storedTripId =
    localStorage.getItem(
      "selectedTripId"
    );

  const [selectedTripId,
    setSelectedTripId] =
    useState(
      storedTripId
        ? Number(
          storedTripId
        )
        : mockTrips[0].id
    );

  const selectedTrip =
    trips.find(
      (trip) =>
        trip.id === selectedTripId
    );
  const handleCreateTrip = (
    newTrip: any
  ) => {
    setTrips((prev) => [
      newTrip,
      ...prev,
    ]);

    setSelectedTripId(
      newTrip.id
    );
  };

  const handleEditStop = (
    dayId: number,
    updatedStop: any
  ) => {
    setTrips((prevTrips) =>
      prevTrips.map((trip) => {
        if (
          trip.id !== selectedTripId
        ) {
          return trip;
        }

        return {
          ...trip,

          days: trip.days.map(
            (day: any) => {
              if (
                day.id !== dayId
              ) {
                return day;
              }

              return {
                ...day,

                stops:
                  day.stops.map(
                    (
                      stop: any
                    ) =>
                      stop.id ===
                        updatedStop.id
                        ? updatedStop
                        : stop
                  ),
              };
            }
          ),
        };
      })
    );
  };

  const handleAddDay = () => {
    setTrips((prevTrips) =>
      prevTrips.map((trip) => {
        if (
          trip.id !== selectedTripId
        ) {
          return trip;
        }

        const newDay = {
          id: Date.now(),

          title: `Day ${trip.days.length + 1
            }`,

          stops: [],
        };

        return {
          ...trip,

          days: [
            ...trip.days,
            newDay,
          ],
        };
      })
    );
  };
  const handleAddStop = (
    dayId: number,
    newStop: any
  ) => {
    setTrips((prevTrips) =>
      prevTrips.map((trip) => {
        if (
          trip.id !== selectedTripId
        ) {
          return trip;
        }

        return {
          ...trip,

          days: trip.days.map(
            (day: any) => {
              if (
                day.id !== dayId
              ) {
                return day;
              }

              return {
                ...day,

                stops: [
                  ...day.stops,
                  newStop,
                ],
              };
            }
          ),
        };
      })
    );
  };

  const handleDeleteStop = (
    dayId: number,
    stopId: number
  ) => {
    setTrips((prevTrips) =>
      prevTrips.map((trip) => {
        if (
          trip.id !== selectedTripId
        ) {
          return trip;
        }

        return {
          ...trip,

          days: trip.days.map(
            (day: any) => {
              if (
                day.id !== dayId
              ) {
                return day;
              }

              return {
                ...day,

                stops:
                  day.stops.filter(
                    (stop: any) =>
                      stop.id !== stopId
                  ),
              };
            }
          ),
        };
      })
    );
  };
  const handlePublishTrip = () => {

    if (!selectedTrip) return;

    setTrips((prevTrips) =>
      prevTrips.map((trip) =>
        trip.id === selectedTripId
          ? {
            ...trip,
            status: "published",
          }
          : trip
      )
    );

    selectedTrip.days.forEach(
      (day: any) => {

        day.stops.forEach(
          (stop: any) => {

            mockFeed.unshift({
              id:
                Date.now() +
                Math.random(),

              user: {
                name:
                  "Anjon Mir",

                avatar: "",
              },
              tripId:
                selectedTrip.id,

              tripTitle:
                selectedTrip.title,

              tripCover:
                selectedTrip.coverImage,


              location:
                stop.location,

              createdAt:
                new Date().toISOString(),

              description:
                stop.description,

              images:
                stop.media || [],

              reactions: 0,

              comments: [],

              saves: 0,
            });

          }
        );

      }
    );

    alert(
      "Trip Published!"
    );
  };

  return (
    <section className="trip-page">

      <Container fluid>

        <div className="trip-header">

          <div>

            <h1>
              {selectedTrip?.title}
            </h1>

            <p>
              Mar 15 – Mar 22, 2025
              • 7 Days • Public
            </p>

          </div>

          <button
            className="primary-btn"
            onClick={() =>
              setShowModal(true)
            }
          >
            Create Trip
          </button>

        </div>

        <Row className="g-4">

          {/* LEFT */}

          <Col lg={3}>

            <TripSidebar
              trips={trips}
              selectedTripId={
                selectedTripId
              }
              onSelectTrip={
                setSelectedTripId
              }
              onCreateTrip={() =>
                setShowModal(true)
              }
            />

          </Col>

          {/* CENTER */}

          <Col lg={6}>

            {selectedTrip && (
              <TripEditor
                trip={selectedTrip}
                onAddDay={handleAddDay}
                onAddStop={handleAddStop}
                onDeleteStop={
                  handleDeleteStop
                }
                onEditStop={
                  handleEditStop
                }
              />
            )}

          </Col>

          {/* RIGHT */}

          <Col lg={3}>

            <div className="trip-right-panel">

              <MiniMapPreview />

              <TripStats
                trip={selectedTrip}
              />

            </div>

          </Col>

        </Row>

        {/* GALLERY */}

        <div className="trip-photos glass-card">

          <h3>
            Trip Gallery
          </h3>

          <div className="trip-gallery">

            {selectedTrip?.days
              ?.flatMap(
                (day: any) =>
                  day.stops
              )
              ?.flatMap(
                (stop: any) =>
                  stop.media || []
              )
              ?.map(
                (
                  image: string,
                  index: number
                ) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    className="trip-gallery-image"
                  />
                )
              )}

          </div>

        </div>

        <div className="trip-actions">

          <button className="secondary-btn">
            Save Draft
          </button>

          <button
            className="primary-btn"
            onClick={
              handlePublishTrip
            }
          >
            Publish Trip
          </button>

        </div>

      </Container>

      <TripCreateModal
        isOpen={showModal}
        onClose={() =>
          setShowModal(false)
        }
        onCreateTrip={
          handleCreateTrip
        }
      />

    </section>
  );
}

export default TripPlanner;



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

import { useEffect, useState } from "react";

import useAuth from "../../hooks/useAuth";

import {
  createTrip,
  getTrips,
  // updateTrip,
  // publishTrip,
} from "../../services/tripService";
import { mockFeed }
  from "../../data/mockFeed";

import "./trip.css";

function TripPlanner() {
  const [showModal, setShowModal] =
    useState(false);

  const { user } = useAuth();

  const [trips, setTrips] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

 

  const storedTripId =
    localStorage.getItem(
      "selectedTripId"
    );

  const [selectedTripId,
    setSelectedTripId] =
    useState<string>(
      storedTripId || ""
    );

  const selectedTrip =
    trips.find(
      trip =>
        trip._id === selectedTripId
    );
  const handleCreateTrip =
    async (trip: any) => {

      try {

        const savedTrip =
          await createTrip({

            ...trip,

            ownerUid:
              user?.uid,

            ownerName:
              user?.displayName,

            ownerPhoto:
              user?.photoURL,

          });

        setTrips(prev => [

          savedTrip,

          ...prev,

        ]);

        setSelectedTripId(
          savedTrip._id
        );

      } catch (err) {

        console.error(err);

      }

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
  useEffect(() => {

    if (!user) return;

    loadTrips();

  }, [user]);

  async function loadTrips() {

    try {

      const data =
        await getTrips(user!.uid);

      setTrips(data);

      if (data.length > 0) {

        if (storedTripId) {

          setSelectedTripId(
            storedTripId
          );

        } else {

          setSelectedTripId(
            data[0]._id
          );

        }

      }

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  }

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

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

import "./trip.css";

function TripPlanner() {
  const [showModal, setShowModal] =
    useState(false);

  return (
    <section className="trip-page">

      <Container fluid>

        <div className="trip-header">

          <div>
            <h1>
              Bangladesh Highlights '25
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
              onCreateTrip={() =>
                setShowModal(true)
              }
            />
          </Col>

          {/* CENTER */}

          <Col lg={6}>

            <div className="trip-editor glass-card">

              <h3>
                Day 1 – March 15
              </h3>

              <div className="trip-stop">
                <h5>
                  Lalbagh Fort
                </h5>

                <span>
                  10:00 AM
                </span>
              </div>

              <div className="trip-stop">
                <h5>
                  Old Town Biryani
                </h5>

                <span>
                  1:00 PM
                </span>
              </div>

              <div className="trip-stop">
                <h5>
                  Ahsan Manzil Museum
                </h5>

                <span>
                  3:30 PM
                </span>
              </div>

              <hr />

              <h3>
                Day 2 – March 16
              </h3>

              <div className="trip-stop">
                <h5>
                  Sadarghat River Cruise
                </h5>

                <span>
                  9:00 AM
                </span>
              </div>

              <div className="trip-stop">
                <h5>
                  Star Mosque
                </h5>

                <span>
                  2:00 PM
                </span>
              </div>

            </div>

          </Col>

          {/* RIGHT */}

          <Col lg={3}>

            <div className="trip-right-panel">

              <MiniMapPreview />

              <TripStats />

            </div>

          </Col>

        </Row>

        {/* PHOTOS */}

        <div className="trip-photos glass-card">

          <h3>
            Trip Photos
          </h3>

          <div className="photo-upload-box">
            Upload travel photos
          </div>

        </div>

        {/* ACTIONS */}

        <div className="trip-actions">

          <button className="secondary-btn">
            Save Draft
          </button>

          <button className="primary-btn">
            Publish Trip
          </button>

        </div>

      </Container>

      <TripCreateModal
        isOpen={showModal}
        onClose={() =>
          setShowModal(false)
        }
      />

    </section>
  );
}

export default TripPlanner;
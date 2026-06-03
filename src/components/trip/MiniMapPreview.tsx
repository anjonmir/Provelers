import { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import BudgetCalculator from "./BudgetCalculator";
import TripTimeline from "./TripTimeline";
import TravelPreferences from "./TravelPreferences";

import "./trip.css";

function TripPlanner() {
  const [budget, setBudget] =
    useState(5000);

  const [days, setDays] =
    useState(3);

  const [preferences, setPreferences] =
    useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem(
      "tripPlanner",
      JSON.stringify({
        budget,
        days,
        preferences,
      })
    );
  }, [budget, days, preferences]);

  return (
    <section className="trip-section">
      <Container>
        <div className="planner-header">
          <h1>Smart Trip Planner</h1>

          <p>
            Create and customize your
            perfect travel plan.
          </p>
        </div>

        <Row className="g-4">
          <Col lg={4}>
            <BudgetCalculator
              budget={budget}
              setBudget={setBudget}
            />
          </Col>

          <Col lg={4}>
            <TripTimeline
              days={days}
              setDays={setDays}
            />
          </Col>

          <Col lg={4}>
            <TravelPreferences
              selected={preferences}
              setSelected={
                setPreferences
              }
            />
          </Col>
        </Row>

        <div className="trip-summary-card">
          <h2>Your Trip Summary</h2>

          <div className="summary-grid">
            <div>
              <span>Budget</span>

              <h4>
                ৳ {budget.toLocaleString()}
              </h4>
            </div>

            <div>
              <span>Timeline</span>

              <h4>{days} Days</h4>
            </div>

            <div>
              <span>Preferences</span>

              <h4>
                {preferences.length > 0
                  ? preferences.join(", ")
                  : "None"}
              </h4>
            </div>
          </div>

          <button className="primary-btn mt-4">
            Save Trip Plan
          </button>
        </div>
      </Container>
    </section>
  );
}

export default TripPlanner;
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function TripCreateModal({
  isOpen,
  onClose,
}: Props) {
  const [tripName, setTripName] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [privacy, setPrivacy] =
    useState("Public");

  const [date, setDate] =
    useState("");

  if (!isOpen) return null;

  return (
    <div className="trip-modal-overlay">
      <div className="trip-modal">

        <div className="trip-modal-header">
          <h3>Create New Trip</h3>

          <button
            className="trip-modal-close"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="trip-modal-body">

          <div className="trip-form-group">
            <label>Trip Name</label>

            <input
              type="text"
              value={tripName}
              onChange={(e) =>
                setTripName(
                  e.target.value
                )
              }
            />
          </div>

          <div className="trip-form-group">
            <label>Category</label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
              }
            >
              <option>
                Select Category
              </option>

              <option>
                Adventure
              </option>

              <option>
                Beach
              </option>

              <option>
                Food Tour
              </option>

              <option>
                Hidden Gems
              </option>
            </select>
          </div>

          <div className="trip-form-group">
            <label>Description</label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
            />
          </div>

          <div className="trip-form-group">
            <label>Location</label>

            <input
              type="text"
              value={location}
              onChange={(e) =>
                setLocation(
                  e.target.value
                )
              }
            />
          </div>

          <div className="trip-form-group">
            <label>Date</label>

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(
                  e.target.value
                )
              }
            />
          </div>

          <div className="trip-form-group">
            <label>Privacy</label>

            <select
              value={privacy}
              onChange={(e) =>
                setPrivacy(
                  e.target.value
                )
              }
            >
              <option>
                Public
              </option>

              <option>
                Private
              </option>
            </select>
          </div>

          <div className="trip-form-group">
            <label>Add Photos</label>

            <input
              type="file"
              multiple
            />
          </div>

          <button className="primary-btn w-100">
            Submit Trip
          </button>

        </div>
      </div>
    </div>
  );
}

export default TripCreateModal;
import { useState } from "react";

type Props = {
  isOpen: boolean;

  onClose: () => void;

  onCreateTrip: (
    trip: any
  ) => void;
};
const tripCategories = [
  "Major Tourist Attractions",
  "Historical Sites",
  "Religious Sites",
  "Local Landmarks",
  "Beaches",
  "Islands",
  "Waterfalls",
  "Hills & Mountains",
  "Forests",
  "National Parks",
  "Wildlife Sanctuaries",
  "Rivers",
  "Lakes",
  "Wetlands & Haors",
  "Scenic Viewpoints",
  "Historical Monuments",
  "Archaeological Sites",
  "Museums",
  "Memorials",
  "Forts",
  "Palaces & Zamindar Houses",
  "Mosques",
  "Temples",
  "Churches",
  "Buddhist Monasteries",
  "Shrines & Mazars",
  "Universities & Campuses",
  "Parks & Gardens",
  "Zoos",
  "Eco Parks",
  "Bridges",
  "Lighthouses",
  "Markets & Bazaars",
  "Cultural Centers",
  "Art Galleries",
  "Traditional Villages",
  "Tea Gardens",
  "Char Areas",
  "Adventure Tourism Spots",
  "Festival Venues",
  "Urban Landmarks",
  "Government Buildings",
  "Sports Venues",
  "Local Points of Interest",
];

function TripCreateModal({
  isOpen,
  onClose,
  onCreateTrip,
}: Props) {
  const handleSubmit = () => {
    if (!tripName.trim()) return;

    const newTrip = {

      ownerUid: "",

      ownerName: "",

      ownerPhoto: "",

      title: tripName,

      destination: location,

      coverImage,

      description,

      category,

      privacy,

      startDate: date,

      endDate: date,

      budget: 0,

      status: "draft",

      days: []

    };


    onCreateTrip(newTrip);

    setTripName("");
    setCategory("");
    setDescription("");
    setLocation("");
    setPrivacy("Public");
    setDate("");

    onClose();
  };
  const [tripName, setTripName] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [coverImage,
    setCoverImage] =
    useState(
      "/images/default-cover.jpg"
    );

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
          <div>

            <h3>Create Your Trip</h3>

            <p className="trip-modal-subtitle">
              Plan your journey and share it
              with fellow travelers.
            </p>

          </div>

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

            <input
              type="text"
              value={category}
              placeholder="Search category..."
              list="trip-categories"
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
              }
            />

            <datalist id="trip-categories">
              {tripCategories.map(
                (item) => (
                  <option
                    key={item}
                    value={item}
                  />
                )
              )}
            </datalist>

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
            <label className="form-label">Privacy</label>

            <div className="privacy-toggle">
              <button
                type="button"
                className={`privacy-btn ${privacy === "Public" ? "active" : ""
                  }`}
                onClick={() => setPrivacy("Public")}
              >
                🌍 Public
                <span>Anyone can view</span>
              </button>

              <button
                type="button"
                className={`privacy-btn ${privacy === "Private" ? "active" : ""
                  }`}
                onClick={() => setPrivacy("Private")}
              >
                🔒 Private
                <span>Only you can view</span>
              </button>
            </div>
          </div>


          <div className="trip-form-group full-width">

            <label>
              Trip Cover
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {

                const file =
                  e.target.files?.[0];

                if (!file) return;

                setCoverImage(
                  URL.createObjectURL(
                    file
                  )
                );
              }}
            />
            <img
              src={coverImage}
              alt=""
              className="trip-cover-preview"
            />

          </div>

          <button
            className="primary-btn w-100"
            onClick={handleSubmit}
          >
            Submit Trip
          </button>

        </div>
      </div>
    </div>
  );
}

export default TripCreateModal;

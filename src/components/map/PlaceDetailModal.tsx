import Modal from "react-modal";

import {
  FaMapMarkerAlt,
  FaStar,
  FaHeart,
} from "react-icons/fa";

type Props = {
  isOpen: boolean;
  onClose: () => void;

  place: any;
};

Modal.setAppElement("#root");

function PlaceDetailModal({
  isOpen,
  onClose,
  place,
}: Props) {
  if (!place) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="place-modal"
      overlayClassName="place-modal-overlay"
    >
      <div className="modal-image-wrapper">
        <img
          src={place.image}
          alt={place.name}
          className="modal-image"
        />

        <button
          className="modal-close-btn"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      <div className="modal-content-area">
        <div className="modal-header-info">
          <div>
            <h2>{place.name}</h2>

            <div className="modal-location">
              <FaMapMarkerAlt />

              <span>{place.location}</span>
            </div>
          </div>

          <button className="favorite-btn">
            <FaHeart />
          </button>
        </div>

        <div className="modal-rating">
          <FaStar />

          <span>4.8 Rating</span>
        </div>

        <p className="modal-description">
          {place.description}
        </p>

        <div className="travel-info-grid">
          <div className="travel-info-card">
            <h5>Estimated Cost</h5>

            <span>৳ 2000 - 5000</span>
          </div>

          <div className="travel-info-card">
            <h5>Best Time</h5>

            <span>Winter Season</span>
          </div>

          <div className="travel-info-card">
            <h5>Category</h5>

            <span>{place.category}</span>
          </div>
        </div>

        <div className="modal-buttons">
          <button className="primary-btn">
            Save Place
          </button>

          <button className="secondary-btn">
            Plan Trip
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default PlaceDetailModal;
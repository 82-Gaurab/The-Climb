/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "../Styles/TrekCard.css";

export default function TrekCard({ trek }) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/trek/${trek.trekId}`); // Navigate to TrekDetail page with trekId
  };

  return (
    <div key={trek.trekId} className="trekCard">
      <div className="trekCard-container">
        <div className="trek-card">
          <img src={trek.image} alt="" className="trek-image" />
          <div className="trek-card-content">
            <h3 className="trek-title">{trek.title}</h3>
            <div className="trek-info">
              <span className="trek-label">Location:</span>
              <span className="trek-value">{trek.region}</span>
            </div>
            <div className="trek-info">
              <span className="trek-label">Duration:</span>
              <span className="trek-value">{trek.duration} days</span>
            </div>
            <div className="trek-info">
              <span className="trek-label">Difficulty:</span>
              <span className="trek-value">{trek.difficulty}</span>
            </div>
            <div className="trek-footer">
              <span className="trek-price">$ {trek.price}</span>
              <button className="trek-button" onClick={handleDetailsClick}>
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

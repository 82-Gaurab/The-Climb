/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Calendar,
  Clock,
  Mountain,
  ThermometerSun,
  Users,
  Mail,
} from "lucide-react";
import { useForm } from "react-hook-form";

import "../Styles/TrekDetail.css";

import mountain1 from "../assets/images/mountain1.jpg";
import Footer from "../utility/Footer";
import RequestForm from "../utility/RequestForm";

const TrekDetail = () => {
  const { trekId } = useParams(); // Get trekId from URL
  const [trekData, setTrekData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/getTrek/${trekId}`)
      .then((res) => res.json())
      .then((data) => setTrekData(data.data))
      .catch((err) => console.error("Error fetching trek data:", err));
  }, [trekId]);

  if (!trekData) return <p>Loading...</p>;

  console.log(trekData);

  return (
    <div className="trek-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={trekData.image} alt={trekData.title} className="hero-image" />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">{trekData.title}</h1>
            <div className="hero-details">
              <span>
                <Mountain className="hero-icon" />
                {trekData.region}
              </span>
              <span>
                <Clock className="hero-icon" />
                {trekData.duration} days
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Column - Trek Details */}
        <div>
          <section className="section">
            <h2 className="section-title">Overview</h2>
            <p className="description">{trekData.description}</p>
            <div className="trek-details">
              <div className="detail-content">
                <span className="detail-type">Region: </span>
                <span>{trekData.region}</span>
              </div>

              <div className="detail-content">
                <span className="detail-type">Difficulty: </span>
                <span>{trekData.difficulty}</span>
              </div>

              <div className="detail-content">
                <span className="detail-type">Duration: </span>
                <span>{trekData.duration} days</span>
              </div>

              <div className="detail-content">
                <span className="detail-type">Price: </span>
                <span>$ {trekData.price}</span>
              </div>
            </div>
          </section>
        </div>
        <section className="right-container">
          <RequestForm trekId={trekId} />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TrekDetail;

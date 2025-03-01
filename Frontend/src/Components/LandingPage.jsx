import { useState, useEffect, useRef } from "react";
import "../Styles/LandingPage.css";
import TrekCard from "../utility/TrekCard";
import ReviewCard from "../utility/ReviewCard";

import profilePic from "../assets/icon/user.png";
import Footer from "../utility/Footer";
import axios from "axios";

export default function LandingPage() {
  const [treks, setTreks] = useState([]);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;

    const moveSlider = () => {
      if (!isHovered) {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(moveSlider);
    };

    animationFrame = requestAnimationFrame(moveSlider);

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  useEffect(() => {
    const fetchTreks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getTrek");
        setTreks(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTreks();
  }, []);

  const reviews = [
    {
      profile: profilePic,
      name: "John Doe",
      rating: 5,
      comment:
        "Amazing experience! The service was exceptional and the journey unforgettable.",
    },
    {
      profile: profilePic,
      name: "Jane Smith",
      rating: 4,
      comment:
        "Great service, but there is room for improvement in the booking process.",
    },
    {
      profile: profilePic,
      name: "Michael Lee",
      rating: 5,
      comment: "Highly recommend! Everything was well-organized and enjoyable.",
    },
    {
      profile: profilePic,
      name: "Sara Johnson",
      rating: 4,
      comment:
        "Wonderful trip! Communication could be slightly better, though.",
    },
    {
      profile: profilePic,
      name: "David Kim",
      rating: 5,
      comment: "Exceeded expectations! Will definitely book again.",
    },
    {
      profile: profilePic,
      name: "Olivia Martinez",
      rating: 5,
      comment: "Loved every bit of it. Highly professional service.",
    },
    {
      profile: profilePic,
      name: "Chris Evans",
      rating: 4,
      comment:
        "Great experience overall, though the itinerary was a bit tight.",
    },
    {
      profile: profilePic,
      name: "Emma Watson",
      rating: 5,
      comment: "Perfectly organized and so much fun! Highly recommend.",
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="heroSection">
        <div className="navigation">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/trekList">Treks</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        {/* Hero section content*/}
        <div className="hs-content">
          <div className="titleCard">
            <h1>THE CLIMB</h1>
            <p>Discover Breathtaking Mountain Trails</p>
          </div>
        </div>
      </section>

      {/* LATEST TREKS */}
      <section className="featured-treks">
        <h1>Featured Treks</h1>
        <div className="trek-list">
          {error && <p className="text-red-500">{error}</p>}
          {treks.slice(0, 6).map((trek) => (
            <TrekCard key={trek.trekId} trek={trek} />
          ))}
        </div>
      </section>

      {/* ABOUT US */}
      <section className="about-us">
        <h1>About Us</h1>
        <div className="content">
          <ul>
            <li>
              <p>
                Welcome to Mountain Treks Management, your go-to platform for
                planning and managing unforgettable mountain treks. Explore top
                treks and manage your adventures with ease. Let&apos;s take your
                trekking to new heights!
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="reviews">
        <h1>What People Say About Us</h1>
        <div
          className="review-list flex gap-[20px] overflow-x-hidden "
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {reviews.concat(reviews).map((review, index) => (
            <div key={index} className="flex-none w-fit m-2">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

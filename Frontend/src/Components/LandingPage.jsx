import { useState, useEffect, useRef } from "react";
import "../Styles/LandingPage.css";
import TrekCard from "../utility/TrekCard";
import ReviewCard from "../utility/ReviewCard";

import mountain1 from "../assets/images/mountain1.jpg";
import mountain2 from "../assets/images/mountain2.jpg";
import mountain3 from "../assets/images/mountain3.jpg";
import mountain4 from "../assets/images/mountain4.jpg";
import profilePic from "../assets/icon/user.png";
import Footer from "../utility/Footer";

export default function LandingPage() {
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

  // Static Popular trek data
  // const popularTrek = [
  //   {
  //     title: "Everest Base Camp",
  //     location: "Nepal",
  //     duration: "14 days",
  //     price: "$2,800",
  //     image: mountain1,
  //   },
  //   {
  //     title: "Annapurna Circuit",
  //     location: "Nepal",
  //     duration: "12 days",
  //     price: "$2,200",
  //     image: mountain2,
  //   },
  //   {
  //     title: "Gauri Shanker Himal",
  //     location: "France/Italy",
  //     duration: "8 days",
  //     price: "$1,800",
  //     image: mountain4,
  //   },
  // ];

  const latestTrek = [
    {
      title: "Everest Base Camp",
      location: "Nepal",
      duration: "14 days",
      price: "$2,800",
      image: mountain1,
    },
    {
      title: "Annapurna Circuit",
      location: "Nepal",
      duration: "12 days",
      price: "$2,200",
      image: mountain2,
    },
    {
      title: "Gauri Shanker Himal",
      location: "France/Italy",
      duration: "8 days",
      price: "$1,800",
      image: mountain3,
    },
    {
      title: "Gauri Shanker Himal",
      location: "France/Italy",
      duration: "8 days",
      price: "$1,800",
      image: mountain4,
    },
    {
      title: "Gauri Shanker Himal",
      location: "France/Italy",
      duration: "8 days",
      price: "$1,800",
      image: mountain4,
    },
    {
      title: "Gauri Shanker Himal",
      location: "France/Italy",
      duration: "8 days",
      price: "$1,800",
      image: mountain4,
    },
  ];

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
          {latestTrek.slice(0, 6).map((trek, index) => (
            <TrekCard key={index} trek={trek} />
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

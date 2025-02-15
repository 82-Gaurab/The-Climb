import "../Styles/LandingPage.css";
import mountain1 from "../assets/mountain1.jpg";
import mountain2 from "../assets/mountain2.jpg";
import mountain3 from "../assets/mountain3.jpg";
import mountain4 from "../assets/mountain4.jpg";
import TrekCard from "./TrekCard";

export default function LandingPage() {
  // Static Popular trek data
  const popularTrek = [
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
      image: mountain4,
    },
  ];

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
  ];

  return (
    <div>
      <div className="heroSection">
        {/* <div className="navigation">
          <ul>
            <li>Home</li>
            <li>Trekking package</li>
            <li>Agencies</li>
          </ul>

          <ul>
            <li>
              <button>Login</button>
            </li>
            <li>
              <button>Signup</button>
            </li>
          </ul>
        </div> */}
        {/* Hero section content*/}
        <div className="hs-content">
          <div className="titleCard">
            <h1>THE CLIMB</h1>
            <p>Discover Breathtaking Mountain Trails</p>
          </div>
        </div>
      </div>

      <div className="popular-treks">
        <h1>Popular Treks</h1>
        <div className="trek-list">
          {popularTrek.map((trek, index) => (
            <TrekCard key={index} trek={trek} />
          ))}
        </div>
      </div>

      <div className="latest-treks">
        <h1>Latest Treks</h1>
        <div className="trek-list">
          {latestTrek.map((trek, index) => (
            <TrekCard key={index} trek={trek} />
          ))}
        </div>
      </div>
    </div>
  );
}

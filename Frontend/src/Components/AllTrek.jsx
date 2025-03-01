import axios from "axios";
import { useEffect, useState } from "react";
import TrekCard from "../utility/TrekCard";
import Footer from "../utility/Footer";

export default function AllTrek() {
  const [treks, setTreks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTreks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getTrek");
        setTreks(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTreks();
  }, []);

  return (
    <div>
      <h2
        className="text-9xl mb-4 text-center"
        style={{ fontSize: "3rem", fontWeight: "700" }}
      >
        ALL TREKS
      </h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex flex-wrap gap-9 justify-center align-center mb-[10rem]">
        {treks.map((trek) => (
          <TrekCard key={trek.trekId} trek={trek} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

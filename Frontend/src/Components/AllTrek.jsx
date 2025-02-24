// import axios from "axios";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";

// export default function AllTrek() {
//   const [treks, setTreks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTreks = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/trek"); // Adjust port if needed
//         setTreks(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//         console.log("Data fetched");
//         toast.success("Data fetched successfully!");
//       }
//     };

//     fetchTreks();
//   }, []);

//   return (
//     <div>
//       <h2>All Treks</h2>

//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <ul>
//         {treks.map((trek) => (
//           <li key={trek.trekId}>
//             <h3>{trek.title}</h3>
//             <h3>{trek.trekId}</h3>
//             <img src={trek.image} />
//             <p>Duration: {trek.duration} days</p>
//             <p>Difficulty: {trek.difficulty}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import axios from "axios";
import { useEffect, useState } from "react";
import TrekCard from "../utility/TrekCard"; // Import the TrekCard component

export default function AllTrek() {
  const [treks, setTreks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTreks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getTrek"); // Adjust backend URL
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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">All Treks</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treks.map((trek) => (
          <TrekCard key={trek.id} trek={trek} />
        ))}
      </div>
    </div>
  );
}

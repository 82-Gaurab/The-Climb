/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from "../utility/Button";
import Sidebar from "../utility/Sidebar";
import AddTrek from "./AddTrek";
import axios from "axios";

import "../Styles/TrekManagement.css";

export default function TrekManagement() {
  const [treks, setTreks] = useState([]);

  useEffect(() => {
    const fetchTreks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getTrek");
        setTreks(response.data);
        console.log(`Data fetched: ${JSON.stringify(response.data.data)}`);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchTreks();
  }, []);

  const columns = [
    {
      name: "Trek ID",
      selector: (row) => row.trekId,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Difficulty",
      selector: (row) => row.difficulty,
      sortable: true,
    },
    {
      name: "Region",
      selector: (row) => row.region,
      sortable: true,
    },
    {
      name: "Duration(days)",
      selector: (row) => row.duration,
      sortable: true,
    },
    {
      name: "Price ($)",
      selector: (row) => row.price,
      sortable: true,
    },
  ];

  return (
    <div className="trek-management-container">
      <div className="trek-management-navbar">
        <Sidebar />
      </div>

      <div className="trek-main-content">
        {/* Treks Table */}
        <div className="table-container">
          <DataTable
            key={treks.trekId}
            title="Trek List"
            columns={columns}
            data={treks} // Dynamically set users data
            pagination
            highlightOnHover
            keyField="trekId" // Ensure this is the unique identifier
            fixedHeader
          />
        </div>

        <AddTrek />
      </div>
    </div>
  );
}

/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from "../utility/Button";
import Sidebar from "../utility/Sidebar";
import AddTrek from "./AddTrek";
import axios from "axios";

import "../Styles/TrekManagement.css";
import { toast } from "react-toastify";

const TrekActionButtons = ({ id, handleDelete }) => (
  <div className="flex gap-2">
    <Button text="Delete" onClick={() => handleDelete(id)} />
  </div>
);
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

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/addTrek/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTreks(treks.filter((trek) => trek.trekId !== id));
      console.log(`Trek ${id} deleted.`);
      toast.success("Trek deleted successfully.");
    } catch (err) {
      console.log("Error deleting trek:", err.message);
    }
  };

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
    {
      name: "Action",
      cell: (row) => (
        <TrekActionButtons id={row.trekId} handleDelete={handleDelete} />
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      minWidth: "150px",
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
            data={treks}
            pagination
            highlightOnHover
            keyField="trekId"
            fixedHeader
          />
        </div>

        <AddTrek />
      </div>
    </div>
  );
}

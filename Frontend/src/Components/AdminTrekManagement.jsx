/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "../Styles/TrekManagement.css";
import DataTable from "react-data-table-component";
import Button from "../utility/Button";
import Sidebar from "../utility/Sidebar";
import AddTrek from "./AddTrek";

function ActionButtons({ trekId }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        text={"Edit"}
        onClick={() => alert(`Edit Clicked for ${trekId}`)}
      />
      <Button
        text={"Delete"}
        onClick={() => alert(`Delete Clicked for ${trekId}`)}
      />
      <Button
        text={"Popular"}
        onClick={() => alert(`Popular Clicked for ${trekId}`)}
      />
    </div>
  );
}

export default function TrekManagement() {
  const columns = [
    {
      name: "Trek ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
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
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="action-buttons">
          <ActionButtons trekId={row.id} />
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];

  const [treks, setTreks] = useState([
    {
      id: 1,
      name: "Everest Base Camp",
      difficulty: "Hard",
      region: "Solukhumbu",
      status: "Popular",
      action: <ActionButtons trekId={"1"} />,
    },
    {
      id: 2,
      name: "Annapurna Circuit",
      difficulty: "Moderate",
      region: "Annapurna",
      status: "Not Popular",
      action: <ActionButtons trekId={"2"} />,
    },
  ]);
  return (
    <div className="trek-management-container">
      <div className="trek-management-navbar">
        <Sidebar />
      </div>

      <div className="trek-main-content">
        {/* Treks Table */}
        <div className="table-container">
          <DataTable
            title="Trek List"
            columns={columns}
            data={treks}
            pagination
            highlightOnHover
          />
        </div>

        <AddTrek />
      </div>
    </div>
  );
}

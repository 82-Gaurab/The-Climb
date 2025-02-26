/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Button from "../utility/Button";
import DataTable from "react-data-table-component";
import Sidebar from "../utility/Sidebar";
import "../Styles/AdminDashboard.css";
import axios from "axios";

// Action Buttons Component
const UserActionButtons = ({ id, handleDelete }) => (
  <div className="flex gap-2">
    <Button text="Delete" onClick={() => handleDelete(id)} />
  </div>
);
const RequestActionButtons = ({
  id,
  handleStatusUpdate,
  handleRequestDelete,
}) => (
  <div className="flex gap-2 flex-wrap mb-2">
    <Button text="Pending" onClick={() => handleStatusUpdate(id, "Pending")} />
    <Button
      text="Confirmed"
      onClick={() => handleStatusUpdate(id, "Confirmed")}
    />
    <Button
      text="Cancelled"
      onClick={() => handleStatusUpdate(id, "Cancelled")}
    />
    <Button text="Delete" onClick={() => handleRequestDelete(id)} />
  </div>
);

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [trekRequest, setTrekRequest] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user");
        setUsers(response.data.data); // Set the fetched users
        console.log(`Data fetched: ${JSON.stringify(response.data.data)}`);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchTrekRequest = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/request");
        setTrekRequest(response.data.data); // Set the fetched users
        console.log(
          `Trek Request fetched: ${JSON.stringify(response.data.data)}`
        );
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchTrekRequest();
  }, []);

  // Handle user deletion
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage (or sessionStorage)
      await axios.delete(`http://localhost:5000/api/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Ensure token is included
        },
      });
      setUsers(users.filter((user) => user.userId !== id)); // Remove the user from state
      console.log(`User ${id} deleted.`);
    } catch (err) {
      console.log("Error deleting user:", err.message);
    }
  };

  const handleRequestDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/request/${id}`);
      setTrekRequest(trekRequest.filter((request) => request.requestId !== id)); // Remove the user from state
      console.log(`Request ${id} deleted.`);
    } catch (err) {
      console.log("Error deleting request:", err.message);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/request/${id}`,
        { status: newStatus },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Response from server:", response.data);

      setTrekRequest((prevRequests) =>
        prevRequests.map((req) =>
          req.requestId === id ? { ...req, status: newStatus } : req
        )
      );
    } catch (error) {
      console.error(
        "Failed to update status:",
        error.response?.data || error.message
      );
    }
  };
  // Define table columns
  const requestColumns = [
    {
      name: "Request ID",
      selector: (row) => row.requestId,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "No of people",
      selector: (row) => row.noOfPeople,
      sortable: true,
    },
    {
      name: "Message",
      selector: (row) => row.message,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Trek ID",
      selector: (row) => row.trekId,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <RequestActionButtons
          id={row.requestId}
          handleStatusUpdate={handleStatusUpdate}
          handleRequestDelete={handleRequestDelete}
        />
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      minWidth: "150px",
    },
  ];

  const userColumns = [
    {
      name: "User ID",
      selector: (row) => row.userId,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <UserActionButtons id={row.userId} handleDelete={handleDelete} />
      ),
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="dashboard-navbar">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="heading">Admin Dashboard</h1>

        <div className="data-table">
          <h1>User List</h1>
          <DataTable
            columns={userColumns}
            data={users} // Dynamically set users data
            pagination
            highlightOnHover
            keyField="userId" // Ensure this is the unique identifier
          />
        </div>

        <div className="data-table">
          <h1>Trek Request List</h1>
          <DataTable
            columns={requestColumns}
            data={trekRequest} // Dynamically set users data
            pagination
            highlightOnHover
            keyField="requestId" // Ensure this is the unique identifier
          />
        </div>
      </div>
    </div>
  );
}

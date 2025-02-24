/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Button from "../utility/Button";
import DataTable from "react-data-table-component";
import Sidebar from "../utility/Sidebar";
import "../Styles/AdminDashboard.css";
import axios from "axios";

// Action Buttons Component
const ActionButtons = ({ id, handleDelete }) => (
  <div className="flex gap-2">
    <Button text="Edit" onClick={() => alert(`Edit user ${id}`)} />
    <Button text="Delete" onClick={() => handleDelete(id)} />
  </div>
);

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

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

  // Handle user deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/user/${id}`); // API call to delete the user
      setUsers(users.filter((user) => user.userId !== id)); // Remove the user from state
      console.log(`User ${id} deleted.`);
    } catch (err) {
      console.log("Error deleting user:", err.message);
    }
  };

  // Define table columns
  const columns = [
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
        <ActionButtons id={row.userId} handleDelete={handleDelete} />
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
        <DataTable
          title="User List"
          columns={columns}
          data={users} // Dynamically set users data
          pagination
          selectableRows
          highlightOnHover
          keyField="userId" // Ensure this is the unique identifier
        />
      </div>
    </div>
  );
}

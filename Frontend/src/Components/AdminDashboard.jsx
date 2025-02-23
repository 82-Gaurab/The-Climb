/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../utility/Button";
import { Trash, Edit, Star } from "lucide-react";
import DataTable from "react-data-table-component";
import Sidebar from "../utility/Sidebar";
import "../Styles/AdminDashboard.css";

const ActionButtons = () => (
  <div className="flex gap-2">
    <Button text="Edit" onClick={() => alert("Edit clicked")} />
    <Button text="Delete" onClick={() => alert("Delete clicked")} />
  </div>
);

export default function AdminDashboard() {
  const [data, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      action: <ActionButtons />,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      action: <ActionButtons />,
    },
  ]);

  const [treks, setTreks] = useState([
    {
      id: 1,
      name: "Everest Base Camp",
      difficulty: "Hard",
      region: "Solukhumbu",
      status: "Popular",
    },
    {
      id: 2,
      name: "Annapurna Circuit",
      difficulty: "Moderate",
      region: "Annapurna",
      status: "Not Popular",
    },
  ]);

  const columns = [
    {
      name: "User ID",
      selector: (row) => row.id,
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
      name: "Action",
      selector: (row) => row.action,
    },
  ];

  return (
    // <div className="flex h-screen">
    //   {/* Sidebar Navigation */}
    //   <Sidebar />
    //   {/* Main Content */}
    //   <div className="flex-1 p-6">
    //     <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

    //     {/* Users Table */}
    //     <DataTable
    //       title="User List"
    //       columns={columns}
    //       data={data}
    //       pagination
    //       selectableRows
    //       highlightOnHover
    //     />
    //     {/* <div>
    //       <div>
    //         <h2 className="text-xl font-semibold mb-3">Users</h2>
    //         <table>
    //           <thead>
    //             <tr>
    //               <th>User ID</th>
    //               <th>Name</th>
    //               <th>Email</th>
    //               <th>Role</th>
    //               <th>Actions</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {users.map((user) => (
    //               <tr key={user.id}>
    //                 <td>{user.id}</td>
    //                 <td>{user.name}</td>
    //                 <td>{user.email}</td>
    //                 <td>{user.role}</td>
    //                 <td>
    //                   <Button text="+" className="mr-2">
    //                     <Edit size={16} />
    //                   </Button>
    //                   <Button text="-">
    //                     <Trash size={16} />
    //                   </Button>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div> */}

    //     {/* Treks Table */}
    //     <div className="mt-6">
    //       <div>
    //         <h2 className="text-xl font-semibold mb-3">Treks</h2>
    //         <table>
    //           <thead>
    //             <tr>
    //               <th>Trek ID</th>
    //               <th>Name</th>
    //               <th>Difficulty</th>
    //               <th>Region</th>
    //               <th>Status</th>
    //               <th>Actions</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {treks.map((trek) => (
    //               <tr key={trek.id}>
    //                 <td>{trek.id}</td>
    //                 <td>{trek.name}</td>
    //                 <td>{trek.difficulty}</td>
    //                 <td>{trek.region}</td>
    //                 <td>{trek.status}</td>
    //                 <td>
    //                   <Button variant="outline" className="mr-2">
    //                     <Edit size={16} />
    //                   </Button>
    //                   <Button variant="destructive" className="mr-2">
    //                     <Trash size={16} />
    //                   </Button>
    //                   <Button variant="secondary">
    //                     <Star size={16} />
    //                   </Button>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>

    //     {/* Add New Trek Form */}
    //     <div className="mt-6">
    //       <div>
    //         <h2 className="text-xl font-semibold mb-3">Add New Trek</h2>
    //         <form>
    //           <input placeholder="Trek Name" className="mb-3" />
    //           <input placeholder="Region" className="mb-3" />
    //           <input
    //             placeholder="Duration (days)"
    //             type="number"
    //             className="mb-3"
    //           />
    //           <select className="mb-3">
    //             <option>Easy</option>
    //             <option>Moderate</option>
    //             <option>Hard</option>
    //           </select>
    //           <input placeholder="Best Season" className="mb-3" />
    //           <input placeholder="Description" className="mb-3" />
    //           <input type="file" className="mb-3" />
    //           <Button text="submit" />
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="dashboard-navbar">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="heading">Admin Dashboard</h1>

        {/* User Table */}
        <DataTable
          title="User List"
          columns={columns}
          data={data}
          pagination
          selectableRows
          highlightOnHover
        />
      </div>
    </div>
  );
}

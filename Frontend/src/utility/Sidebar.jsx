import "../Styles/Sidebar.css";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const handleLogout = async () => {
    try {
      // Remove the token from local storage
      localStorage.removeItem("token");

      // Redirect the user to the login page or homepage after logout
      window.location.href = "/"; // Replace with your actual login page path
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="sidebar-container">
      <div className={"menu-button"}>
        <Menu size={24} />
      </div>
      <nav className={"sidebar"}>
        <ul>
          <li onClick={() => navigate("/admin")} id="dashboard">
            <p>Dashboard</p>
          </li>
          <li onClick={() => navigate("/admin/trek")} id="treks">
            <p>Trek Management</p>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

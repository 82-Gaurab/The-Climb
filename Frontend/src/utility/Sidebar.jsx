import "../Styles/Sidebar.css";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
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
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

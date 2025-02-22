import "../Styles/Sidebar.css";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar-container">
      <div className={"menu-button"}>
        <Menu size={24} />
      </div>
      <nav className={"sidebar"}>
        {/* <ul>
          <li id="dashboard">
            <a href="/admin">Dashboard</a>
          </li>
          <li id="users">
            <a href="/admin/user">Users Management</a>
          </li>
          <li id="treks">
            <a href="/admin/trek">Trek Management</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul> */}
        <ul>
          <li onClick={() => navigate("/admin")} id="dashboard">
            <a href="#">Dashboard</a>
          </li>
          <li onClick={() => navigate("/admin/user")} id="users">
            <a href="#">Users Management</a>
          </li>
          <li onClick={() => navigate("/admin/trek")} id="treks">
            <a href="#">Trek Management</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

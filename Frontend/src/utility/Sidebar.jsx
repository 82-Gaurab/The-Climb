import { useState } from "react";
import "../Styles/Sidebar.css";
import { Menu } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="sidebar-container">
      <button
        className={`menu-button ${isOpen ? "open" : "closed"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>
      <nav className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <ul>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Users Management</a>
          </li>
          <li>
            <a href="#">Trek Management</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
